type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/kratos-te",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/github-f.svg`,
          leavesWebsite: true,
        },
        {
          name: "Discord",
          link: "https://discord.com/users/1012022014774616094",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/discord-f.svg`,
          leavesWebsite: true,
        },
        {
          name: "Telegram",
          link: "https://t.me/ElementalGod",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/telegram-f.svg`,
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/akratos_god",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/twitter.svg`,
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:micgodtopdev@gmail.com",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/mail-f.svg`,
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "miteshtagap",
    paypal: "miteshtagadiya",
    message: "I appreciate your support very much! 💙",
  },
};
