export default function Head({ currentPage = "Home" }) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Michael Gordon - Fullstack Developer, Designer and Creator."
      : `${currentPage} - Michael Gordon`
  }`;
  const desc =
    "Experienced fullstack & web3 developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.";
  return (
    <>
      <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`} />
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="keywords"
        content="Michael Gordon, Michael Gordon, freelancers, react developer, reactjs freelancer, nextjs"
      />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`static/favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`} />
      <link rel="canonical" href="https://kratos-rouge.vercel.app/" />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kratos-rouge.vercel.app/" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content="https://kratos-rouge.vercel.app/static/misc/og.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kratos-rouge.vercel.app/" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content="https://kratos-rouge.vercel.app/static/misc/og.png"
      ></meta>
    </>
  );
}
