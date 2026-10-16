const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-6 text-sm border-t text-muted-foreground">
      <p>© {currentYear} Humphrey Uno</p>
      <p className="text-xs font-light">Built with Next.js, Tailwind CSS & Motion</p>
    </footer>
  );
};

export default Footer;
