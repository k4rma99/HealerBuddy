import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { regId: Number } }) {
  try {
    const registrationId = params.regId;

    // Fetch the HTML content of the website
    const response = await axios.get(
      `https://registration.crpo.ca/mpower/mpp/member-directory-search.action?s=${registrationId}`
    );
    const html = response.data;

    // Parse the HTML using cheerio
    const $ = cheerio.load(html);

    // Find the table with the Registration Number column
    const table = $(
      'table:has(th:contains("Registration Number")):has(th:contains("Registration Category"))'
    );

    if (!table.length) {
      return NextResponse.json({ error: "Table not found" }); // Return here
    }

    // Find the row containing the registration ID
    const row = table.find('tr:has(td:contains("' + registrationId + '"))');
    const isRegistrationIdPresent = row.length > 0;

    const registrationCategoryCell = row.find('td:nth-child(6)');
    const registrationCategory = registrationCategoryCell.text().trim();

    const isRegisteredPsychotherapist =
      registrationCategory === "Registered Psychotherapist";

    return NextResponse.json({
      valid: isRegistrationIdPresent && isRegisteredPsychotherapist,
      registeredStatus: registrationCategory,
    }); // Return here
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to process request" }); // Return here
  }
}
