import { Separator } from "@/components/ui/separator";

interface TokenomicsContentProps {
  id: string;
  title: string;
  paragraph: string;
  paragraph_two?: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
  }[];
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({
  id,
  title,
  paragraph,
  paragraph_two,
  list,
}) => {
  return (
    <section
      className="flex scroll-mt-64 flex-col gap-y-4 px-2 text-sm text-black dark:text-neutral-300 md:px-0 md:text-base"
      id={id}
    >
      <h2 className="w-fit text-2xl text-black dark:text-white">{title}</h2>
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
      <Separator className="mt-12 bg-gradient-to-r from-custom-color to-purple-600 " />
    </section>
  );
};

export default TokenomicsContent;