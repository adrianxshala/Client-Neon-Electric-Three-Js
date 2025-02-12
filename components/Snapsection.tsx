// components/SnapSection.tsx
import { ReactNode } from "react";

interface SnapSectionProps {
  children: ReactNode;
}

const SnapSection: React.FC<SnapSectionProps> = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          height: 100vh;
          width: 50vw;
          scroll-snap-align: start;
          display: grid;
          place-items: center;
        }
      `}</style>
    </section>
  );
};

export default SnapSection;
