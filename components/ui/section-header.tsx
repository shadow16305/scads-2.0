const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="text-custom-color dark:bg-custom-color/20 rounded-3xl bg-[#0B1018] px-4 py-2 text-sm md:text-base">
      {title}
    </h4>
  );
};

export default SectionHeader;
