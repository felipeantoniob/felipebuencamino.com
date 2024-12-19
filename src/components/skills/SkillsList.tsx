import {
  frameworks,
  languages,
  performanceAndSecurity,
  testing,
  toolsAndDev,
  uiUxDesign,
  type Skill,
} from "./skills";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="flex flex-col gap-8">
    <h3 className="text-2xl font-semibold text-ctp-text">{title}</h3>
    <ul className="list-none space-y-4">
      {skills.map((skill, index) => (
        <li key={index} className="text-ctp-subtext1">
          <strong className="font-semibold text-ctp-text">{skill.name}:</strong>{" "}
          {skill.description}
        </li>
      ))}
    </ul>
  </div>
);

const SkillsList = () => {
  return (
    <div className="flex flex-col gap-12 p-0 lg:p-4">
      <SkillCategory title="Languages" skills={languages} />
      <SkillCategory title="Frameworks & Libraries" skills={frameworks} />
      <SkillCategory title="Tools & Development" skills={toolsAndDev} />
      <SkillCategory title="Testing & Quality Assurance" skills={testing} />
      <SkillCategory title="UI/UX & Design" skills={uiUxDesign} />
      <SkillCategory
        title="Performance & Security"
        skills={performanceAndSecurity}
      />
    </div>
  );
};

export default SkillsList;
