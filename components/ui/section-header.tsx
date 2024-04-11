const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="px-4 py-2 text-sm text-black dark:text-neutral-300 md:text-base">
      {title}
    </h4>
  );
};

export default SectionHeader;
