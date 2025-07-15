import { useInView } from "./useInView";
import "./Section.css";

export function Section({ children }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default Section;