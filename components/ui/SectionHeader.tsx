const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="rounded-3xl bg-lime/20 px-4 py-2 text-lime">{title}</h4>
  );
};

export default SectionHeader;
