import React, { createContext, useContext } from "react";

const AccordionItemContext = createContext({ id: "" });

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionItem compound components cannot be rendered outside the AccordionItem component"
    );
  }

  return context;
};

const AccordionItem = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
