import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BITCS Reactjs Developer",
    location: "Delhi, India",
    description: `Assigned to a client Project where I work only in Frontend. I have been assigned to other projects in the past as well, most of which were in Reactjs and some required working with Nodejs as well. Mentored and Managed some juniors with some Frontend projects. ${"\n"} Skills: Reactjs, Nextjs, TailwindCSS, ShadCn ui, Nodejs, Nestjs, Postgres, and other related technologies`,
    icon: React.createElement(FaReact),
    date: "August 2021 - present",
  },
  {
    title: "BITCS Full Stack Intern",
    location: "Delhi, India",
    description:
      "Worked under a mentor and learnt all about Full Stack Development. Learnt Reactjs, Nodejs, etc.",
    icon: React.createElement(FaReact),
    date: "May 2020 - August 2021",
  },
  {
    title: "Step Up Analytics Full-Stack Intern",
    location: "Remote",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - April 2020",
  },
  {
    title: "Jawaharlal Nehru University Website Developer Intern",
    location: "Delhi, India",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - April 2020",
  },
] as const;

export const projectsData = [
  {
    title: "MusicRoom",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Nestjs",
      "Nodejs",
      "Websockets",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
