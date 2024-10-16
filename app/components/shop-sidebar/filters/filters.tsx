import Accordion from "./accordion/accordion";
import CheckboxItemFilter from "./checkbox-item-filter/checkbox-item-filter";
import PriceFilter from "./price-filter/price-filter";

import { manufacturers, stones } from "./mocks";

const Filters = () => {
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
