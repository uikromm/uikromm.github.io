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
        title: "Financial Sheet",
        tools: "",
        sourse: "https://github.com/uikromm/financial-sheet",
        href: "",
    },
];

export const selectedProjects: selectedProject[] = [
    {
        title: "Search-gbook",
        tools: "TypeScript, Next.js",
        sourse: "https://github.com/uikromm/search-gbook",
        href: "https://search-gbook.vercel.app/",
    },
    {
        title: "Portfolio CLI side",
        tools: "TypeScript",
        sourse: "https://github.com/uikromm/portfolio-cli-side/",
        href: "https://portfolio-cli-side.vercel.app/",
    },
    {
        title: "F-plus audit",
        tools: "TypeScript, Next.js, Sanity Studio (CMS)",
        sourse: "",
        href: "https://f-plusaudit.uz/",
    },
    {
        title: "Contributed to AllGood e-commerce website",
        tools: "JavaScript",
        sourse: "",
        href: "https://allgood.uz/o-nas",
    },
];