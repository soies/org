"use server";

import { client } from "@/sanity/lib/client";
import { TeamMember } from "../types";
import {
  JOURNAL_QUERY,
  MAGAZINES_QUERY,
  TEAMS_QUERY,
} from "@/sanity/lib/queries";

export async function fetchTeamData(): Promise<TeamMember[]> {
  try {
    const data = await client.fetch<TeamMember[]>(TEAMS_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching team data:", error);
    throw error;
  }
}

export const fetchMagazines = async () => {
  const data = await client.fetch(MAGAZINES_QUERY);
  return data;
};

export const fetchJournal = async () => {
  const data = await client.fetch(JOURNAL_QUERY);
  return data;
};