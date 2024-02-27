interface TaxProps {
  textClasses: string;
  opacityClasses: string;
}

const Taxes: React.FC<TaxProps> = ({ textClasses, opacityClasses }) => {
  return (
    <div className={`flex justify-between text-sm ${textClasses}`}>
      <p>
        <span className={opacityClasses}>Gas:</span> 0.05%
      </p>
      <p>
        <span className={opacityClasses}>Slippage:</span> 3%
      </p>
      <p>
        <span className={opacityClasses}>Tax:</span> 3%
      </p>
    </div>
  );
};

export default Taxes;
