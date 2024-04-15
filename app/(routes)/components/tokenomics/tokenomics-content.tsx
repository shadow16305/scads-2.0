interface TokenomicsContentProps {
  paragraph: string;
  paragraph_two?: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
  }[];
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({
  paragraph,
  paragraph_two,
  list,
}) => {
  return (
    <div className="my-6 flex flex-col items-center gap-y-2 px-2 text-sm text-black dark:text-neutral-300 md:px-0 md:text-base">
      <p className="max-w-[340px] lg:max-w-[900px] xl:max-w-[1031px]">
        {paragraph}
      </p>
      {list && (
        <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 pl-4 lg:max-w-[900px] xl:max-w-[1031px]">
          {list.map((item, index) => (
            <li key={index}>
              {item.list_one && <p>{item.list_one}</p>}
              {item.list_two && <p>{item.list_two}</p>}
              {item.list_three && <p>{item.list_three}</p>}
            </li>
          ))}
        </ul>
      )}
      {paragraph_two && <p className="max-w-[1031px]">{paragraph_two}</p>}
    </div>
  );
};

export default TokenomicsContent;
