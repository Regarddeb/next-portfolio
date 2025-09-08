const Title: React.FC<{ title: string; size?: string }> = ({ title, size }) => {
  return (
    <p className={`${size ?? "text-9xl"} font-playfair opacity-20 font-medium`}>
      {title}
    </p>
  );
};

export default Title;
