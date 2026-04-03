-- Add missing columns to profiles table that are used in onboarding and profile editing
-- These columns were missing from the initial migration but referenced throughout the app

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS height integer;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS age integer;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS activity_level text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS goal text;
