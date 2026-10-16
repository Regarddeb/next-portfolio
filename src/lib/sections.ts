export const sections = [
  { id: "whoami", label: "whoami" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const scrollToSection = (id: SectionId) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
