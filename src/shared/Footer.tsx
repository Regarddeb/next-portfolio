const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full text-center py-4 text-sm border-t">
      <p>© {currentYear} Humphrey Uno</p>
      <p className="text-xs font-light">Built with Next.js & Tailwind CSS</p>
    </div>
  );
};

export default Footer;
