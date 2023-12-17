import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hpiifmltbpqpryqcxqiv.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaWlmbWx0YnBxcHJ5cWN4cWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NjY0ODAsImV4cCI6MjAxODM0MjQ4MH0.Pd9VYLCdc2eNBt7bV_mlIj5HdE5IKUqjH6qBErYSTa0";

// Better put your these secret keys in .env file
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
});
