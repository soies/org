"use server";

import { client } from "@/sanity/lib/client";
import { TeamMember } from "../types";
import { TEAMS_QUERY } from "@/sanity/lib/queries";

export async function fetchTeamData(): Promise<TeamMember[]> {
  try {
    const data = await client.fetch<TeamMember[]>(TEAMS_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching team data:", error);
    throw error;
  }
}
