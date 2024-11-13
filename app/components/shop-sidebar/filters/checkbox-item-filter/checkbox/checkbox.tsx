"use client";
import { FormControlLabel } from "@mui/material";
import { CustomCheckbox } from "./styled";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Checkbox = ({ label }: { label: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const manufacturersFromURL = searchParams.get("producer")?.split(",") || [];
    setIsChecked(manufacturersFromURL.includes(label));
  }, [searchParams, label]);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const manufacturersFromURL = searchParams.get("producer")?.split(",") || [];

    const updatedManufacturers = manufacturersFromURL.includes(value)
      ? manufacturersFromURL.filter((el) => el !== value)
      : [...manufacturersFromURL, value];

    const params = new URLSearchParams(searchParams.toString());
    if (updatedManufacturers.length > 0) {
      params.set("producer", updatedManufacturers.join(","));
    } else {
      params.delete("producer");
    }

    router.replace(`/shop?${params.toString()}`);
    setIsChecked(updatedManufacturers.includes(label));
  };

  return (
    <FormControlLabel
      label={label}
      control={
        <CustomCheckbox
          value={label}
          onChange={handleChangeCheckbox}
          checked={isChecked}
        />
      }
    />
  );
};

export default Checkbox;
