export type StepType = "left" | "right";
export interface Step {
  type: StepType;
  message: string;
  delay: number; 
}

export const steps: Step[] = [
  {
    type: "left",
    message: `Hi! We pulled in 1 banner from Figma. Want me to add the animation
            or bring in more resizes?`,
    delay: 1000,
  },
  { type: "right", message: "Add Resizes: Skyscraper 336 x 450px, Portrait 453 x 120px", delay: 1000 },
  {
    type: "left",
    message: "I generated the resizes you requested – check if you like everything. If there's anything you want to adjust, let me know.",
    delay: 1000,
  },
];
