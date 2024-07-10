import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error signing out:', error.message)
  }

  const authProps = {
    supabaseClient: supabase,
    appearance: { theme: ThemeSupa },
    providers: ['google'],
  }

  // Only add redirectTo for local development
  if (process.env.NODE_ENV === 'development') {
    authProps.redirectTo = "http://localhost:3000"
  }else{
    authProps.redirectTo = "https://login-and-signup-with-google-auth-on-supabase.vercel.app"
  }

  return (
    <div className="App">
      {
        session ? (
          <div>
            <h1>Welcome, {session.user.role}</h1>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <Auth {...authProps} />
        )
      }
    </div>
  );
}

export default App;