export type EducationItem = {
  institution: string;
  program: string;
  duration: string;
  detail?: string;
  type: "degree" | "fellowship";
};

export const education: EducationItem[] = [
  {
    institution: "Visvesvaraya Technological University",
    program: "B.E. in Electronics and Communication Engineering",
    duration: "Aug 2018 — July 2022",
    detail: "CGPA: 8.80 / 10",
    type: "degree",
  },
  {
    institution: "Bevisioneers Fellowship",
    program: "Fellowship for Doers — Sustainability & Innovation",
    duration: "July 2024 — 1 Year (Part-time)",
    detail:
      "Intensive hybrid fellowship built around the 'DO method' of innovation. Skills gained: Venture Development, Systems Thinking, Impact Measurement, Personal Leadership & Mindset, Pitching & Communication.",
    type: "fellowship",
  },
];
