import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, BriefcaseBusiness } from "lucide-react";

export const DATA = {
  name: "Srinivasan",
  initials: "M",
  url: "https://srini.io",
  location: "Chennai, TamilNadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer dedicated to creating innovative solutions and building impactful projects.",
  summary:
    "Detail-oriented Front-End Developer with over 2 years of experience building modern, scalable web applications. Proficient in React.js, JavaScript, TypeScript, and advanced front-end technologies such as Next.js and Tailwind CSS. Passionate about crafting intuitive user interfaces and improving user experiences, I excel in collaborating with cross-functional teams and thriving in fast-paced environments. Seeking to leverage my React.js expertise to contribute to innovative projects.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "HTML", img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "BootStrap", img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
    { name: "Sass", img: "https://img.icons8.com/?size=100&id=vEiU8UeAmv0x&format=png&color=000000" },
    { name: "Tailwindcss", img: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { name: "JavaScript", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { name: "TypeScript", img: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
    { name: "React", img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
    { name: "Next.js", img: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
    { name: "MongoDb", img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
  ],
  Secskills: [
    { name: "PhotoShop", img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
    { name: "Illustrator", img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000" },
    { name: "Indesign", img: "https://img.icons8.com/?size=100&id=13675&format=png&color=000000" },
    { name: "AfterEffect", img: "https://img.icons8.com/?size=100&id=108781&format=png&color=000000" },
    { name: "Premiere Pro", img: "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000" },
    { name: "LightRoom", img: "https://img.icons8.com/?size=100&id=19313&format=png&color=000000" },
    { name: "AdobeXD", img: "https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000" },
    { name: "Figma", img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
    { name: "Canva", img: "https://img.icons8.com/?size=100&id=lAWjO4LexGga&format=png&color=000000" },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Work", icon: BriefcaseBusiness, label: "Work" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Srinimohand@gmail.com",
    tel: "+919677884305",
    social: {
      Instagram: {
        name: "Instagram",
        url: "#",
        icon: Icons.Instagram,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/srinivasan-md/",
        icon: Icons.linkedin,

        navbar: true,
      },


      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [

    {
      company: "Weboin",
      href: "https://weboin.com/",
      badges: [],
      location: "Chennai, TamilNadu",
      title: "Web Development",
      logoUrl: "/weboinz.jpg",
      start: "Feb 2023",
      end: "Present",
      description: "Web Developer -      Jan 2024 ~ Present ",
      description1: "",
      description2: "Developed responsive websites and dynamic user interfaces using HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS. Focused on creating dynamic user interfaces and enhancing user experiences across web applications. Collaborated with developers and clients to create user-friendly, scalable web applications ",
      description3: "",
      description4: "WordPress & Shopify Developer / Intern ~ Feb 2023 to Jan 2024 ",
      description5: " ",
      description6: "Designed and customized visually appealing, responsive user interfaces for WordPress and Shopify websites, ensuring seamless user experiences across devices through theme customization, layout adjustments, and UI enhancements.",
      description7: " "

    },
  ],
  education: [
    {
      school: "St. Peter's College of Engineering and Technology",
      href: "#",
      degree: "Bachelor's Degree of Information Technology (B.Tech)",
      logoUrl: "",
      start: "2017",
      end: "2021",
    },
    {
      school: "Government boys higher secondary school",
      href: "",
      degree: "Grade XII Higher Secondary Certificate (HSC)",
      logoUrl: "",
      start: "2015",
      end: "2017",
    },
    {
      school: "CSI.Central.Hr.Sec.School",
      href: "",
      degree: "Grade X Secondary School Certificate (SSC)",
      logoUrl: "",
      start: "",
      end: "2015",
    },

  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Product AI",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Created 'Product AI,' a comprehensive website designed to help users compare a wide range of products, including mobiles, laptops, and home appliances. The platform provides detailed insights and comparisons, enabling users to make well-informed purchase decisions with ease, focusing on convenience, user experience, and reliability in product evaluation.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "MongoDB",
          href: "#",
          disabled: "disabled"
        }, {
          title: "Express JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Node JS",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Company Website ",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Developed a professional website for a digital marketing company, showcasing services including digital marketing, website development, mobile app development, social media management, and SEO, aimed at enhancing online visibility and client engagement",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Strapi CMS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Gold Landing Website",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Designed and developed a website for a gold transaction company, featuring a user-friendly form to securely collect customer details and streamline transactions, ensuring a seamless and efficient user experience.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Emailjs",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Candit",
      dates: " 2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Developed 'Candit,' a dynamic social media platform featuring Gen Z-friendly elements and interactive fun games, designed to enhance user engagement and provide an entertaining, community-driven experience.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "CSS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },

  ],
} as const;
