const Title: React.FC<{ title: string; size?: string }> = ({ title, size }) => {
  return (
    <p className={`text-6xl ${size ?? "lg:text-9xl"} font-playfair opacity-15 font-medium text-center`}>
      {title}
    </p>
  );
};

export default Title;
