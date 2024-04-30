import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionItems } from "@/constants/content";

const FaqAccordion = ({ searchValue }: { searchValue: string }) => {
  const filteredItems = accordionItems.filter((item) =>
    item.trigger.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {filteredItems.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger className="text-start text-sm text-white md:text-base">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-neutral-300">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
