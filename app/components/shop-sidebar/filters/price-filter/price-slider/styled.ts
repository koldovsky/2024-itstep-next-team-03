import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const CustomSlider = styled(Slider)(() => ({
  color: "#D4B496",
  height: 8,

  "& .MuiSlider-track": {
    border: "none",
    borderRadius: 4,
    backgroundColor: "#ececec",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid #D4B496",
    "&:hover": {
      boxShadow: "inherit",
    },
    "&.Mui-active": {
      boxShadow: "inherit",
    },
  },
  "& .MuiSlider-valueLabel": {
    // color: "#fff",
    borderRadius: 4,
  },
}));
