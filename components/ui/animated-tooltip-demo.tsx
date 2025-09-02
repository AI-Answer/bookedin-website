"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "Adam James",
    designation: "GrowthEngineX",
    image: "/adam-pic.png",
  },
  {
    id: 2,
    name: "Andrew Reveill",
    designation: "Peak Agent",
    image: "/andrew-pic.png",
  },
  {
    id: 3,
    name: "Bradley Benner",
    designation: "Semantic Mastery",
    image: "/bradley-pic.png",
  },
  {
    id: 4,
    name: "Jamie Paredes",
    designation: "Speed 2 Lead AI",
    image: "/jamie-pic.png",
  },
  {
    id: 5,
    name: "Liam Ottley",
    designation: "Morningside AI",
    image: "/liam-pic.png",
  },
  {
    id: 6,
    name: "Nehemiah",
    designation: "SLFB",
    image: "/nehemiah-pic.png",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-6 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export { AnimatedTooltipPreview };
