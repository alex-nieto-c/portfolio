/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import Head from "next/head";
// import "tailwindcss/tailwind.css";

export const metadata = {
  applicationName: "Michael Gordon",
  keywords: [
    "Michael Gordon",
    "Michael Gordon",
    "freelancers",
    "fullstack developer",
    "blockchain",
    "react developer",
    "reactjs freelancer",
    "nextjs",
  ],
  title: "Michael Gordon - fullstack Developer, Designer and Creator.",
  description:
    "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
  alternates: {
    canonical: "https://kratos-rouge.vercel.app/",
  },
  metadataBase: new URL("https://kratos-rouge.vercel.app"),
  openGraph: {
    title: "Michael Gordon - fullstack Developer, Designer and Creator.",
    description:
      "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
    url: "https://kratos-rouge.vercel.app",
    siteName: "Michael Gordon",
    images: [
      {
        url: "https://kratos-rouge.vercel.app/static/misc/og.png",
        alt: "Michael Gordon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`,
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`],
    apple: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    title: "Michael Gordon - Web Developer, Designer and Creator.",
    description:
      "Experienced fullstack and web3 developer with 8 years of experience. As a fullstack developer, I possess the skills and knowledge to work on both the front-end and back-end of web applications. Additionally, my experience in web3 development indicates that I have expertise in building decentralized applications using blockchain technology. With 8 years of experience, I have likely gained a deep understanding of various programming languages, frameworks, and tools necessary for developing robust and scalable web applications.",
    url: "https://kratos-rouge.vercel.app",
    images: {
      url: "https://kratos-rouge.vercel.app/static/misc/og.png",
      alt: "Michael Gordon",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`}
          sizes="16x16"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-8RP5F509C8');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8RP5F509C8', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
