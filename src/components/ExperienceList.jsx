import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  return (
    <section className="mt-12" aria-label="Professional experience">
      <ul>
        {experience.map((item) => (
          <ExperienceItem key={item.period} {...item} />
        ))}
      </ul>
    </section>
  );
}
