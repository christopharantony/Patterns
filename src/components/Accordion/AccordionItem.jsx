import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default AccordionItem;
