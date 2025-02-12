// components/ScrollContainer.tsx
import { ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  return (
    <div className="scroll-container">
      {children}
      <style jsx>{`
        .scroll-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default ScrollContainer;
