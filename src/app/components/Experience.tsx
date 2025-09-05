import Title from "../shared/Title";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Title title="experience" />
      <div className="flex w-full items-center h-[30%]">
        <div className="w-1/2 text-right flex flex-col gap-3">
          <p className="text-5xl font-semibold">Computer Programmer II</p>
          <div className="flex flex-col gap-2 items-end">
            <p>
              Bicol Regional Hospital and Medical Center | Sep 2024 – Present{" "}
            </p>
            <div className="p-1.5 w-[70%] relative">
              <p>
                ⚡ Maintains and enhances two hospital information systems.
                Contributed to the development of a cancer registry system.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex w-full items-center h-[30%]">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col gap-3">
          <p className="text-5xl font-semibold">Junior Python Developer</p>
          <div className="flex flex-col gap-2">
            <p>Freelance (Part-time) | Nov 2024 – Jun 2025 </p>
            <div className="p-1.5 w-[70%]">
              <p>
                ⚡ Improved frontend bugs and delivered full-stack features for
                a social media web app, including an account suspension module.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center h-[30%]">
        <div className="w-1/2 text-right flex flex-col gap-3">
          <p className="text-5xl font-semibold">Computer Programmer</p>
          <div className="flex flex-col gap-2 items-end">
            <p>
              Bicol Regional Hospital and Medical Center | Oct 2023 – Sep 2024
            </p>
            <div className="p-1.5 w-[68%]">
              <p>
                ⚡ Designed and deployed an internal document management system
                with feature rich file manager module used across hospital
                departments.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Experience;
