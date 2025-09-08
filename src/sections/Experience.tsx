import Title from "../shared/Title";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  description,
}) => (
  <div className="flex w-[80%] items-center h-[30%] pl-10">
    <div className="flex flex-col gap-3">
      <p className="text-5xl font-semibold">{role}</p>
      <div className="flex flex-col gap-2">
        <p>{company}</p>
        <p>{period}</p>
        <div className="w-[80%] relative">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Computer Programmer II",
      company: "Bicol Regional Hospital and Medical Center",
      period: "Sep 2024 – Present",
      description:
        "⚡ Maintains and enhances two hospital information systems. Contributed to the development of a cancer registry system.",
    },
    {
      role: "Junior Python Developer",
      company: "Freelance (Part-time)",
      period: "Nov 2024 – Jun 2025",
      description:
        "⚡ Improved frontend bugs and delivered full-stack features for a social media web app, including an account suspension module.",
    },
    {
      role: "Computer Programmer",
      company: "Bicol Regional Hospital and Medical Center",
      period: "Oct 2023 – Sep 2024",
      description:
        "⚡ Designed and deployed an internal document management system with a feature-rich file manager module used across hospital departments.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full" id="experience">
      <div className="w-[80%] mb-1">
        <Title title="experience" />
      </div>
      <div className="w-[80%] flex flex-col gap-30 pb-20">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
