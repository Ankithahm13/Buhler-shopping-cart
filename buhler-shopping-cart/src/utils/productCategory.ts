import { PRODUCT_CATEGORY } from "./constants";

export const productCategory = (category: string) => {
  let section = "";
  if (category === PRODUCT_CATEGORY.MACHINE_ROLLER) {
    section = "Rollers";
  } else if (category === PRODUCT_CATEGORY.MACHINE_SORTER) {
    section = "Optical Sorters";
  } else if (category === PRODUCT_CATEGORY.MACHINE_DRYER) {
    section = "Dryers";
  } else {
    section = "Die Casting Machines";
  }
  return section;
};