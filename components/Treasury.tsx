import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

const treasuryItems = [
  {
    id: "ti1",
    name: "Total balance",
    amount: "$34781.63",
  },
  {
    id: "ti2",
    name: "SCADS balance",
    amount: "$536",
  },
  {
    id: "ti3",
    name: "TWINE balance",
    amount: "$145017",
  },
  {
    id: "ti4",
    name: "USDT balance",
    amount: "$10304",
  },
  {
    id: "ti5",
    name: "USDC balance",
    amount: "$0",
  },
];

const Treasury = () => {
  return (
    <section className="mt-32 flex flex-col items-center gap-y-8">
      <SectionHeader title="Treasury balance" />
      <div className="relative flex w-full justify-between rounded-3xl bg-[#2E454F]/10 px-20 py-9">
        {treasuryItems.map((item) => (
          <div
            className="z-10 flex flex-col items-center gap-y-2"
            key={item.id}
          >
            <p className="text-lime">{item.name}</p>
            <p className="text-white opacity-70">{item.amount}</p>
          </div>
        ))}
        <Image
          src="/images/treasury-cubes.png"
          alt="cubes"
          width={361}
          height={122}
          className="absolute left-0 top-0 z-0 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Treasury;
