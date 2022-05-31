import { styled } from "@mui/system";
import { Button as RawButton } from "@mui/material";

export const Button = styled(RawButton)({
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1.25rem",
  width: "100%",
  height: "4rem"
});

export default Button;
