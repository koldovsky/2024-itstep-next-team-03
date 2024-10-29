import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Checkbox as MuiCheckbox } from "@mui/material";

export const CustomCheckbox = styled(MuiCheckbox)(() => ({
  color: grey[600],

  "&.MuiCheckbox-root": {
    color: grey[600],
  },

  "&.Mui-checked": {
    color: grey[800],
  },

  "&:hover": {
    backgroundColor: "transparent",
  },

  "&.MuiCheckbox-colorPrimary.Mui-checked": {
    color: grey[800],
  },

  "&.Mui-disabled": {
    color: grey[400],
  },
}));
