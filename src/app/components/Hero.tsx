import { Quote } from "lucide-react";
import Title from "../shared/Title";

const Hero: React.FC = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center w-full">
      <div className="w-1/2 pr-30">
        <Title title="whoami" />
        <div className="flex flex-col ml-5 mt-[-30] gap-3 pl-10">
          <p className="text-6xl font-bold tracking-wide">Humphrey Uno</p>
          <div className="relative">
            <p className="text-lg font-light">
              Full stack developer with 3 years of experience in the field. Big
              fan of getting things done and getting straight to the point.
              Approaches problems with straightforward and effective solutions.
            </p>
            <div className="absolute right-20 bottom-[-60]">
              <Quote strokeWidth={0} fill="#fff" size={90} opacity={0.2} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
};

export default Hero;
