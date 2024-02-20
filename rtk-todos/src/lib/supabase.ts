// import { createClient as createBrowserClient } from '@supabase/supabase-js';

// export const supabase = createBrowserClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// Compare this snippet from rtk-todos/src/lib/supabase.ts:
import { createClient as createBrowserClient } from '@supabase/supabase-js';
export const supabase = createBrowserClient(
  "https://ltjgxizrocesskzupixw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0amd4aXpyb2Nlc3NrenVwaXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDE1NzEsImV4cCI6MjAxMjY3NzU3MX0.lUlIXbcuZX-1ZnX8G1QfxJlv7RkN63WzDgbh_xVjxss"
);
