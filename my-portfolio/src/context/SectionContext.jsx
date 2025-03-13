import { createContext, useContext, useState } from "react";

const SectionContext = createContext();
export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSection = () => useContext(SectionContext);
