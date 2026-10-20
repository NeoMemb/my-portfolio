import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumeDocument from "@/components/resume/ResumeDocument";
import { profile } from "@/data/content";

export const runtime = "nodejs";

/** "Ariori Abdulrafiu" -> "ariori-abdulrafiu" */
const filename = `${profile.name
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")}-cv.pdf`;

export async function GET() {
  const buffer = await renderToBuffer(createElement(ResumeDocument));

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      // inline lets the browser show the PDF; "Save as" still offers the
      // filename below.
      "Content-Disposition": `inline; filename="${filename}"`,
    },
  });
}
