import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumeDocument from "@/components/resume/ResumeDocument";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(createElement(ResumeDocument));

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      // inline lets the browser show the PDF; "Save as" still offers the
      // filename below.
      "Content-Disposition": 'inline; filename="jordan-avery-resume.pdf"',
    },
  });
}
