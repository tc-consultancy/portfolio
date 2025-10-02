import {robo1} from "@/assets";
import { cn } from "@/lib/utils";

const SectionContainer = ({ data }:{data:any}) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6 space-y-24">
      {data.map((item:any, idx:number) => (
        <div
          key={idx}
          className={`flex flex-col justify-between items- md:flex-row ${
            item.imgDirection === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8`}
        >
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-400 dark:text-purple-300 mb-4">
              {item.title}
            </h2>
            {Array.isArray(item.description) ? (
              <ul className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-2">
                {item.description.map((bullet: string, bulletIndex: number) => (
                  <li key={bulletIndex} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Image Section */}
          <div className={cn("flex-1 flex ", item.imgDirection === "left" ? "justify-end" : "justify-start")}>
            <img
              src={item.imgUrl || robo1}
              alt={item.title}
              className="max-w-sm w-full rounded-xl h-72  shadow-lg bg-purple-100 dark:bg-purple-900 p-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionContainer;
