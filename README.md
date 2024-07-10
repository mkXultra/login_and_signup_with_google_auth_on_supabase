# use google auth on supabase

## refs
https://qiita.com/kaho_eng/items/a37ff001ea9eae226183#google-oauth%E3%82%AD%E3%83%BC%E3%82%92supabase%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E8%A8%AD%E5%AE%9A%E3%81%97%E3%82%88%E3%81%86


1. Supabaseプロジェクトの設定:
   - Supabaseダッシュボードで新しいプロジェクトを作成します。
   - 認証設定でGoogleプロバイダーを有効にします。

2. Google Cloud Consoleの設定:
   - 新しいプロジェクトを作成します。
   - OAuth同意画面を設定します。
   - 認証情報でOAuth 2.0クライアントIDを作成します。

3. SupabaseとGoogleの連携:
   - Google Cloud Consoleで取得したクライアントIDとシークレットを、SupabaseのGoogle認証設定に入力します。

4. アプリケーションでの実装:
   - Supabase JavaScript clientライブラリを使用して、Googleログイン機能を実装します。
