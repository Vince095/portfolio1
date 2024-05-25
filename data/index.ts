import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a chat nuxt app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-manthus website",
    des: "A Professional service outsourcing platform",
    img: "/p1.svg",
    iconLists: ["/lav.svg","/nod.svg", "/tail.svg", "/ts.svg", "/soc.svg"],
    link: "e-manthus.com",
  },
  {
    id: 2,
    title: "E-manthus mobile App",
    des: "A professional service outsourcing platform",
    img: "/p2.svg",
    iconLists: ["/jav.svg", "/fir.svg", "/and.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "A music player app",
    des: "A music player app with a beautiful UI and a lot of features.",
    img: "/p3.svg",
    iconLists: ["/nux.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "AI image generator",
    des: "A nextjs app that generates images using AI and edit them.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mon.svg", "/c.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Vincent was a pleasure. He was very responsive and helpful. He was able to quickly and effectively solve any issues that we had. He was also very knowledgeable and helpful. He was always willing to help and answer any questions we had. He was always willing to work with us to achieve our goals.",
    name: "Frank Ifeoluwa",
    title: "Project manager at cosmotech",
  },
  {
    quote:
      "Vincent is amazing! He is a great developer and has a great attitude. He is very knowledgeable and has a great understanding of the technologies we use. He is very responsive and is always willing to help us with any issues we have.",
    name: "Lehlohonolo Sekokotoana",
    title: "Senior developer at E-manthus",
  },
  {
    quote:
      "Vincent is always willing to learn new technologies and always delivers on time. He is a great team player and is always willing to help out when needed. He is very flexible with time zones and is able to work with us to achieve our goals.",
    name: "Hari Veladanda",
    title: "VP of Engineering at worldremit",
  }
];

export const companies = [
  {
    id: 1,
    name: "ZEPZ",
    img: "/zep.svg",
    nameImg: "/ZEPZ.svg",
  },
  {
    id: 2,
    name: "worldremit",
    img: "/wol.svg",
    nameImg: "/worldremit.svg",
  },
  {
    id: 3,
    name: "Neusoft",
    img: "ne.svg",
    nameImg: "/Neu.svg",
  },
  {
    id: 4,
    name: "E-manthus",
    img: "/em.svg",
    nameImg: "/E-ma.svg",
  },
  {
    id: 5,
    name: "cosmotech",
    img: "/cos.svg",
    nameImg: "/cosm.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - Neusoft",
    desc: "Assisted in the development of client-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer -  E-manthus",
    desc: "Designed and developed mobile app for Android platforms using java and kotlin also design and develop the website.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Associate Engineer - worldremit",
    desc: "worked on payment platforms and user experience using modern frontend technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer - cosmotech",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/vince095",
  },
  {
    id: 2,
    img: "/ing.svg",
    url: "https://www.instagram.com/theycallme_vince/",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/vincent-thejane/",
  },
];
