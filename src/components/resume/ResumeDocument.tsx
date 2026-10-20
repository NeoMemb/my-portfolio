import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { about, jobs, profile, projects, resume, socials } from "@/data/content";

// Accent colors darkened from the site palette so they read on white paper.
const colors = {
  navy: "#0a192f",
  slate: "#495670",
  green: "#0d9488",
  body: "#242b3a",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 44,
    paddingBottom: 52,
    paddingHorizontal: 52,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: colors.body,
    lineHeight: 1.4,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
  },
  title: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.green,
    marginTop: 2,
  },
  contact: {
    fontSize: 8.5,
    color: colors.slate,
    marginTop: 6,
  },
  section: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.green,
    letterSpacing: 1.5,
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#d8dee9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  role: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
  },
  company: {
    color: colors.green,
    fontFamily: "Helvetica-Bold",
  },
  range: {
    fontSize: 9,
    color: colors.slate,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletMark: {
    width: 10,
    color: colors.green,
  },
  bulletText: {
    flex: 1,
  },
  detail: {
    fontSize: 8.5,
    color: colors.slate,
    marginTop: 2,
    marginBottom: 6,
  },
  entry: {
    marginBottom: 10,
  },
  projectRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
  },
});

function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.section}>{children.toUpperCase()}</Text>;
}

export default function ResumeDocument() {
  // Derived from `socials` so the printed links can never drift from the
  // ones on the site.
  const contactLine = [
    profile.email,
    profile.location,
    ...socials
      .filter((s) => s.key === "github" || s.key === "linkedin")
      .map((s) => s.href.replace(/^https?:\/\//, "")),
  ].join("  •  ");

  return (
    <Document
      title={`${profile.name} — Résumé`}
      author={profile.name}
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.contact}>{contactLine}</Text>

        <SectionHeading>Summary</SectionHeading>
        <Text>{resume.summary}</Text>

        <SectionHeading>Experience</SectionHeading>
        {jobs.map((job) => (
          <View key={job.company} style={styles.entry} wrap={false}>
            <View style={styles.row}>
              <Text style={styles.role}>
                {job.role} @{" "}
                <Text style={styles.company}>{job.company}</Text>
              </Text>
              <Text style={styles.range}>{job.range}</Text>
            </View>
            <View>
              {job.highlights.map((highlight, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletMark}>▪</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.detail}>{job.stack.join("  •  ")}</Text>
          </View>
        ))}

        <SectionHeading>Projects</SectionHeading>
        {projects.map((project) => (
          <View key={project.name} style={styles.projectRow} wrap={false}>
            <Text style={styles.projectName}>{project.name} — </Text>
            <Text style={styles.bulletText}>{project.description}</Text>
          </View>
        ))}

        <SectionHeading>Skills</SectionHeading>
        <Text>{about.skills.join("  •  ")}</Text>

        <SectionHeading>Education</SectionHeading>
        <View style={styles.row} wrap={false}>
          <Text style={styles.role}>
            {resume.education.degree},{" "}
            <Text style={styles.company}>{resume.education.school}</Text>
          </Text>
          <Text style={styles.range}>{resume.education.range}</Text>
        </View>
      </Page>
    </Document>
  );
}
