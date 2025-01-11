interface Imsgs {
    cli_url_txt: string;
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
    cli_url_txt: "Feeling Geeky?",
    greeting_txt: "Hi, I'm Ikrom 👋",
    about_txt: "I'm a <span style='color: #1091ed;'>frontend developer</span> with over 4 years of web experiences. I work with <span style='color: #1091ed;'>React.js</span> and <span style='color: #1091ed;'>Next.js</span>. Currently, I am broadening my knowledge in back-end development.",
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