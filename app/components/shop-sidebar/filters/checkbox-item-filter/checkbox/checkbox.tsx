"use client";
import { FormControlLabel } from "@mui/material";
import { CustomCheckbox } from "./styled";
const Checkbox = ({ label }: { label: string }) => {
  return <FormControlLabel label={label} control={<CustomCheckbox />} />;
};

export default Checkbox;
