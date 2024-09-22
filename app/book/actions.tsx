"use server";

import { google } from "googleapis";
import { JWT } from "google-auth-library";

function getSheets() {
  const client = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth: client });
}

export async function getAppts(date: string): Promise<string[]> {
  if (date === "") return [];
  if (new Date(date) < new Date()) return [];

  const DayOfWeek = new Date(date).getDay() + 1;
  const sheets = getSheets();

  const hoursResponse = (
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: `Hours!B${DayOfWeek}:${DayOfWeek}`,
    })
  ).data.values;
  if (!hoursResponse) return [];
  const hours = hoursResponse[0].filter((hour) => hour !== "");

  const taken = (
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Appointments!B2:C",
    })
  ).data.values;
  console.log(taken);
  if (!taken) return hours;

  const available = hours.filter(
    (hour) => !taken.find((appt) => appt[0] === date && appt[1] === hour),
  );

  return available;
}

export async function addAppt(date: string, time: string): Promise<void> {}
