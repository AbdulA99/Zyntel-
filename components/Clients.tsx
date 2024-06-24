"use client";
import React from "react";
import { CardStack } from "../components/ui/CardStack";
import { cn } from "@/utils/cn";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of <Highlight>Fight Club</Highlight> is that you do not
        talk about fight club. The second rule of{" "}
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

const Clients = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center py-20 px-4 lg:px-8">
      <div className="text-left lg:mr-16 mb-8 lg:mb-0 w-full lg:w-auto">
        <h2 className="text-indigo-600 text-[22px] font-semibold mb-2">
          - Our Testimonials
        </h2>
        <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
          Reviews Of People Who Have <br className="hidden lg:inline" />
          Found Through Dreaming.
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-8 max-w-2xl">
          Creating products with a strong identity. We provide brilliant ideas
          and adding the world called success brand. We deliver customized
          marketing campaign to use your audience to make a positive move.
        </p>
      </div>

      <div className="w-full lg:w-auto">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
};

export default Clients;
