"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="relative scroll-mt-16 mb-10 sm:mb-10">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                visible={true}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-white/75">

                  {Array.isArray(item.description) ? <ul className="list-disc ml-2">{item.description.map((desc, index) => <li key={index}>{desc}</li>)}</ul>: item.description} </p> </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
