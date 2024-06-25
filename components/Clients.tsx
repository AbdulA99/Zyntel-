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
    name: "Aoife Mallory",
    designation: "Business Development Representative",
    content: (
      <p>
        I had a mixed experience with Zyntel. As a project manager exploring new
        opportunities, I engaged with their services hoping for a seamless
        transition to a new role. Communication was adequate but occasionally
        lacked clarity.
      </p>
    ),
  },
  {
    id: 1,
    name: "Jamie Murphy",
    designation: "Talent Acquisition Specialist",
    content: (
      <p>
        The team at Zyntel demonstrated a solid understanding of the talent
        acquisition field.Throughout the recruitment process, their
        communication was consistent and clear. They provided useful insights,
        thorough interview preparation.
      </p>
    ),
  },
  {
    id: 2,
    name: "Sarah Murphy",
    designation: "HR Assistant",
    content: (
      <p>
        The team at Zyntel took the time to understand my background, skills,
        and career aspirations.Throughout the process, their communication was
        consistent and supportive. They kept me informed at every stage,
        ensuring I felt valued and well-prepared.
      </p>
    ),
  },

  {
    id: 3,
    name: "Jack O'Neil",
    designation: "Intel Software Developer",
    content: (
      <p>
        I am incredibly grateful to Zyntel for their exceptional service in helping me secure an internship as a software engineer. As a recent graduate, I was eager to find an opportunity that would allow me to apply my skills and grow professionally
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
