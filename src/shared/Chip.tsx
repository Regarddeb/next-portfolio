const Chip: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={`inline-flex items-center border border-border rounded-full px-3 py-1 text-xs md:text-sm text-muted-foreground bg-background/60 transition-colors hover:border-highlight hover:text-foreground ${className}`}
  >
    {children}
  </span>
);

export default Chip;
