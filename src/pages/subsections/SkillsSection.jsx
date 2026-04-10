import React from "react";
import { motion as Motion } from "framer-motion";
import SkillsDiv from "../../components/skills_component.jsx/SkillsDiv";
import SectionHeading from "../../components/SectionHeading";
import { skills } from "../../utils/dataProvider";
import { stagger, fadeItem, viewportOnce } from "../../lib/motion";

const SKILL_CATEGORY_TITLES = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "Devops",
  tools: "tools",
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full scroll-mt-24 lg:scroll-mt-12 bg-transparent flex items-center justify-center py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl flex flex-col gap-y-10">
        <SectionHeading
          eyebrow="Stack"
          title="Skills & Tools"
          subtitle="Technologies I use to design interfaces, ship APIs, and deploy with confidence."
        />

        <Motion.div
          className="flex flex-col gap-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
        >
          {Object.entries(skills).map(([category, skillsList]) => (
            <Motion.div key={category} variants={fadeItem}>
              <SkillsDiv
                title={SKILL_CATEGORY_TITLES[category] ?? category}
                skillsList={skillsList}
              />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
