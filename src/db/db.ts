interface IProject {
  title: string;
  tools: string;
  sourse: string;
  href: string;
}
interface selectedProject {
  title: string;
  tools: string;
  sourse: string;
  href: string;
}

export const currentProjects: IProject[] = [
  {
    title: "Chaqmoq (AI based game)",
    tools: "TypeScript, React.js, FireBase",
    sourse: "",
    href: "",
  },
];

export const selectedProjects: selectedProject[] = [
  {
    title: "Financial Sheet",
    tools: "JavaScript, React.js",
    sourse: "https://github.com/uikromm/financial-sheet",
    href: "",
  },
  {
    title: "f-plus audit",
    tools: "Next.js, TypeScript, Sanity studio (CRM) and SEO optimized",
    sourse: "",
    href: "https://www.f-plusaudit.uz/",
  },
  {
    title: "Contributed to AllGood e-commerce website",
    tools: "JavaScript",
    sourse: "",
    href: "https://allgood.uz/o-nas",
  },
  {
    title: "Chayxanshik.uz",
    tools: "JavaScript",
    sourse: "",
    href: "https://chayxanshik.uz/",
  },
];
