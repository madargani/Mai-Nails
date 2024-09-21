"use server";

export async function getAppts(date: string): Promise<string[]> {
  return ["1:00 PM", "2:00 PM", "3:00 PM"];
}
