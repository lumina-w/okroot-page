-- OKRoot waitlist capture table.
-- Run once in the Supabase SQL editor (project: sodipamuidfbaoxwenjc).
-- Table name has a hyphen, so it must always be double-quoted in SQL.

create table if not exists public."okroot-waitlist" (
  id              uuid primary key default gen_random_uuid(),
  email           text not null unique,
  name            text,
  conditions      text[] not null default '{}',
  other_condition text,
  created_at      timestamptz not null default now()
);

-- Migration for tables created before name/other_condition existed.
alter table public."okroot-waitlist" add column if not exists name text;
alter table public."okroot-waitlist" add column if not exists other_condition text;

-- RLS on: nobody can read/update/delete via the publishable (anon) key.
alter table public."okroot-waitlist" enable row level security;

-- The ONLY thing the public (anon) role may do is insert a row.
drop policy if exists "anon can join waitlist" on public."okroot-waitlist";
create policy "anon can join waitlist"
  on public."okroot-waitlist"
  for insert
  to anon
  with check (true);

-- Refresh PostgREST's schema cache so the table is reachable immediately.
notify pgrst, 'reload schema';

-- Read the list from the dashboard or with the service_role key only.
