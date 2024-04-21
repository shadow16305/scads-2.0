import { cn } from "@/lib/utils";

interface TaxProps {
  textClasses: string;
  colorClasses: string;
}

const Taxes: React.FC<TaxProps> = ({ textClasses, colorClasses }) => {
  return (
    <div className={cn("flex justify-between text-sm", textClasses)}>
      <p>
        <span className={colorClasses}>Gas:</span> 0.05%
      </p>
      <p>
        <span className={colorClasses}>Slippage:</span> 3%
      </p>
      <p>
        <span className={colorClasses}>Tax:</span> 3%
      </p>
    </div>
  );
};

export default Taxes;
