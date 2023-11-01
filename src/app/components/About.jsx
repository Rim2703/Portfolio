"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Restful API&apos;s</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>M.tech Computer Science Engg.</li>
          <li>Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh</li>
          <li>B.tech Computer Science Engg.</li>
          <li>Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Full stack developer</li>
          <li>Qanvus technology</li>
        </ul>
      ),
    },
  ];
  
const About = () => {
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
                <Image src="/images/about.png" alt="image" width={300} height={200} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">   I am a full stack web developer with a passion for creating
                        web applications. I have experience
                        working with JavaScript,  Node.js, Express, MongoDB, React.js, Redux,
                        HTML, CSS, and Git & Github. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.</p>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t)=>t.id===tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About