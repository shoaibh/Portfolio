import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MusicRoom from "@/public/MusicRoom.png";
import Streamify from "@/public/streamify.png";
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
    title: "BITCS Full Stack Developer",
    location: "Delhi, India",
    description: [
      `Working in Frontend with ReactJS, NextJS, React-Query, Context, Redux and various other Frontend libraries.`,
      `Led a team of 3 juniors to develop the newer frontend for Codersera with Nextjs and blogs with Ghost
    Content Api. Responsive design was a big part of this project.`,

      `Developing different client projects with highly structured and optimized code.`,
      `Most Notable project is the Insurance website I'm currently on, where we are developing a place for
    pharmacists to do Prior Authorization more easily.`,
    ],
    icon: React.createElement(FaReact),
    date: "August 2021 - present",
  },
  {
    title: "BITCS Full Stack Intern",
    location: "Delhi, India",
    description: [
      "Worked under a mentor and helped developing a video meet platform using React and webRTC",
      "Learnt Reactjs, Nodejs, Nextjs, Nestjs, PostgreSQL and many other languages and frameworks",
    ],
    icon: React.createElement(FaReact),
    date: "May 2020 - August 2021",
  },
  {
    title: "Step Up Analytics Full-Stack Intern",
    location: "Remote",
    description: [
      `Worked in Frontend and Backend to develop the StepUp Analytics EdTech website.`,
      `Worked with a team of 3 developers to develop the site where students can purchase courses. Used stripe for
    payment integration.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - April 2020",
  },
  {
    title: "Jawaharlal Nehru University Website Developer Intern",
    location: "Delhi, India",
    description: "Worked on developing a recruitment website for JNU placement cell in 15 days.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2019 - April 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Streamify",
    description: `A Data Dashboard for users to check which artist got the most streams in a period of time. User can analyse
using different graphs and table`,
    tags: ["Reactjs (vite)", "Typescript", "Tailwind", "recharts", "Shadcn", "react-date-picker"],
    imageUrl: Streamify,
    url: "https://streamify-hazel.vercel.app/",
  },
  {
    title: "MusicRoom",
    description: `A website where different users can login, create and join different rooms. Users can chat with each other and
      listen to music. Only the owner of the room can play the music but anyone can add it to the queue.`,
    tags: ["React", "Next.js", "Nestjs", "Next-Auth", "Tailwind", "Websockets"],
    imageUrl: MusicRoom,
    url: "https://shoaib-hamza-resume.vercel.app/project_video.html",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "Git",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
