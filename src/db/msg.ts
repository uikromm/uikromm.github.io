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
    all_skills: [],
    social_links: [
        {
            title: "GitHub",
            href: "https://github.com/uikromm"
        }
    ]
}

export const CV_LINK: string = "https://drive.google.com/file/d/1eLIlD-Qbuqqr6KdjtefT1cjxGcW1u2cY/view?usp=sharing";