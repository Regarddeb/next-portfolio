import Title from "../shared/Title";

const Hero: React.FC = () => {
  return (
    <div
      className="flex h-[100vh] flex-col items-center justify-center w-full"
      id="whoami"
    >
      <div className="w-[80%] mb-15 md:mb-13 lg:mb-9">
        <Title title="whoami" />
      </div>
      <div className="w-[90%] md:w-[80%] flex flex-col gap-30 pb-20">
        <div className="flex md:w-[80%] items-center h-[30%] pl-10">
          <div className="flex flex-col gap-3">
            <p className="text-4xl md:text-5xl font-semibold">Humphrey Uno</p>
            <div className="flex flex-col gap-2">
              <div className="w-[85%] xl:w-[80%] relative">
                <p>
                  Full stack developer with 3 years of experience in the field.
                  Big fan of getting things done and getting straight to the
                  point. Approaches problems with straightforward and effective
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
