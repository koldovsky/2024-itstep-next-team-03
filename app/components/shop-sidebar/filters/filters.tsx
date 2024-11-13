import Accordion from "./accordion/accordion";
import CheckboxItemFilter from "./checkbox-item-filter/checkbox-item-filter";
import PriceFilter from "./price-filter/price-filter";

import { stones } from "./mocks";
import { useEffect, useState } from "react";
import { CheckboxItem } from "./types";

const Filters = () => {
  const [manufacturers, setManufacturers] = useState<CheckboxItem[]>([]);

  useEffect(() => {
    async function loadManufacturers() {
      try {
        const response = await fetch("/api/manufactures");
        const result = await response.json();
        setManufacturers(result);
      } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
      }
    }

    loadManufacturers();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <p className="">Filters</p>
      <Accordion title="Price">
        <PriceFilter />
      </Accordion>

      <Accordion title="Manufacturer">
        <CheckboxItemFilter items={manufacturers} />
      </Accordion>

      <Accordion title="Stones">
        <CheckboxItemFilter items={stones} />
      </Accordion>
    </div>
  );
};

export default Filters;
