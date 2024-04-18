interface RoadmapItemProps {
  date: string;
  l1: string;
  l2?: string;
  l3?: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ date, l1, l2, l3 }) => {
  return (
    <li className="relative mb-6 min-w-[340px] sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full backdrop-blur-lg dark:bg-white/10">
          <svg
            className="h-2.5 w-2.5 text-custom-color"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-white/10 sm:flex"></div>
      </div>
      <div className="mt-3 sm:pe-8">
        <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-white">
          {date}
        </time>
        <ul className="text-base font-normal text-gray-500 dark:text-neutral-300">
          <li>{l1}</li>
          {l2 && <li>{l2}</li>}
          {l3 && <li>{l3}</li>}
        </ul>
      </div>
    </li>
  );
};

export default RoadmapItem;
