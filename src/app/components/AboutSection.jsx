"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Reacr</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>BA/BI</li>
        <li>Oracle Cloud Infrastructure</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FullStack Java Developer Jr Program, Generation Colombia</li>
        <li>Frontend Specialist | React | Oracle Cloud Infrastructure, Oracle Alura Latam</li>
        <li>Business administration degree, Areandina University</li>
        <li>Market Management Technologist</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Oracle Cloud Infrastructure ONE</li>
        <li>Python for Data Science</li>
        <li>SQL introduction  with MySQL</li>
        <li>React G5 One</li>
        <li>Oracle Next education F2 T5 Front-end program</li>
        <li>Frontend G5 ONE </li>
        <li>CRUD with asynchronous JavaScript</li>
        <li>Business Agility G4 ONE</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi there! I&apos;m a front-end development enthusiast with a zest for creating delightful online experiences. Proficient in HTML, CSS, JavaScript, and frameworks like React and Angular, I thrive on turning ideas into engaging interfaces. My passion for continuous learning extends to exploring Cloud Engineering, while my collaborative spirit drives me to seek innovative solutions. Excited to contribute my expertise and creativity to projects aiming not only for success but also for impactful innovation in the tech sector.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
