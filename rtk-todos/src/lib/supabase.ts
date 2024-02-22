// import { createClient as createBrowserClient } from '@supabase/supabase-js';

// export const supabase = createBrowserClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// Compare this snippet from rtk-todos/src/lib/supabase.ts:
import { createClient as createBrowserClient } from '@supabase/supabase-js';
export const supabase = createBrowserClient(
  "",
  ""
);
