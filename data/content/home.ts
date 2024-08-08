type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "Storybook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  },
  {
    title: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    title: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    title: "GitLab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    title: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  {
    title: "Rust",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-rust-is-a-multi-paradigm-system-programming-language-logo-color-tal-revivo.png",
  },
  {
    title: "Ethereum",
    icon: "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-ethereum-cryptocurrency-vitaliy-gorbachev-fill-vitaly-gorbachev.png",
  },
  {
    title: "Solana",
    icon: "https://img.icons8.com/nolan/64/solana.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My work stands out due to its attention to detail, user-centric build, and seamless functionality, resonating with users' needs.",
  },
  {
    quote:
      "Clients appreciate the innovative solutions, intuitive interfaces, and consistent quality I bring to every project.",
  },
  {
    quote:
      "With a focus on user satisfaction, my work consistently earns positive feedback and fosters long-term engagement.",
  },
];
