const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <p className="text-9xl font-playfair opacity-20 font-medium">{title}</p>
  );
};

export default Title;
