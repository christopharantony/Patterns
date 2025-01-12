import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionTitle = ({ className, children, id }) => {
  const { toggleItem } = useAccordionContext();

  function handleClick() {
    toggleItem(id);
  }
  return (
    <h3 className={className} onClick={handleClick}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
