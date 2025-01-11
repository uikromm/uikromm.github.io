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
        tools: "JavaScript, React.js",
        sourse: "https://github.com/uikromm/financial-sheet",
        href: "",
    },
];

export const selectedProjects: selectedProject[] = [
    {
        title: "CLI Portfolio",
        tools: "Next.js, TypeScript",
        sourse: "https://github.com/uikromm/portfolio-cli-side/",
        href: "https://portfolio-cli-side.vercel.app/",
    },
    {
        title: "Contributed to AllGood e-commerce website",
        tools: "JavaScript",
        sourse: "",
        href: "https://allgood.uz/o-nas",
    },
];