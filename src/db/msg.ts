interface Imsgs {
    cv_txt: string;
    greeting_txt: string;
    about_txt: string;
    all_skills: {
        title: string;
        skills?: string;
    }[];
    social_links: {
        title: string;
        href: string;
    }[];
}

export const msgs: Imsgs = {
    cv_txt: "Download CV",
    greeting_txt: "Hi, I'm Ikrom 👋",
    about_txt: "I'm a <b>frontend developer</b> with over 4 years of web experiences. I work with <b>React.js</b> and <b>Next.js</b>. Currently, I am broadening my knowledge in back-end development.",
    all_skills: [
        {
            title: "Languages:",
            skills: "HTML, CSS, JavaScript and TypeScript."
        },
        {
            title: "Frameworks:",
            skills: "React.js (Next.js)."
        },
        {
            title: "Version control:",
            skills: "Git, GitHub."
        },
        {
            title: "Styling:",
            skills: "TailwindCSS, Radix UI, SCSS with BEM methodology."
        },
        {
            title: "Content management systems:",
            skills: "Sanity studio."
        }
    ],
    social_links: [
        {
            title: "GitHub",
            href: "https://github.com/uikromm"
        },
        {
            title: "LinkdeIn",
            href: "https://www.linkedin.com/in/uikromm/"
        }
    ]
}

export const TERMINAL_LINK: string = "https://uikromm-cli-portfolio.vercel.app/";