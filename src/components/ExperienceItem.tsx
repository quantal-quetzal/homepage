import type { ReactNode } from "react";

interface ExperienceItemProps {
  period: string;
  company: ReactNode;
  description: ReactNode;
}

export default function ExperienceItem({
  period,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <li className="grid gap-4 border-b border-[#e1e1e1] py-6 last:border-b-0 md:grid-cols-[11.25rem_18.75rem_minmax(0,1fr)] md:gap-5">
      <p className="font-bold md:font-light">{period}</p>
      <p>{company}</p>
      <p>{description}</p>
    </li>
  );
}
