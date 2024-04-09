const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="rounded-3xl bg-[#0B1018] px-4 py-2 text-sm text-lime dark:bg-lime/20 md:text-base">
      {title}
    </h4>
  );
};

export default SectionHeader;
