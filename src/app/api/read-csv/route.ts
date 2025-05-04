import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), "src/assets/csv", "dtk.csv"); // Adjust the path if needed
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = Papa.parse(fileContent, { header: true });

  return NextResponse.json(data);
}
