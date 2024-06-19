import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "01. Consultation",
    description: "Zyntel's CV enhancement service crafts tailored resumes that highlight your skills and achievements, maximizing your job prospects.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "02. Job Search",
    description: "Zyntel's job search service connects you with opportunities that match your career goals.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
 
  {
    title: "03. Consultation",
    description:
      "At Zyntel, our consultation service provides expert guidance in recruitment and career advancement, offering tailored industry insights.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];



const Services = () => {
  return (
    <div>
     <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-indigo-600 dark:text-indigo-400 text-[22px] font-semibold mb-2">
          — Our Services
        </h2>
        <h1 className="text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold mb-8">
          Tailored Recruitment and Consultancy Services
        </h1>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
    
  )
}

export default Services

