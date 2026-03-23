import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://api.hsweb.pics';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaXNzIjoic3VwYWJhc2UiLCJpYXQiOjE2NDE3NjkyMDAsImV4cCI6MTc5OTUzNTYwMH0.xTNteRFphY3F9W2PPWOwCQ9PDXD05ySRqkJu5d4Cej0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  db: { schema: 'cheongju_skycar' },
});

export const STORAGE_BUCKET = 'cheongju-skycar';
