import { Box, Container, styled, Typography } from "@mui/material";

export const HeaderBarWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export const HeaderBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  fontSize: "2rem",
  maxWidth: "900px",
  margin: "0px auto",
  padding: "10px 40px",
}));

export const StyledShopName = styled("h4")({
  padding: "10px 0px",
  margin: "0px",
});

export const IconContainer = styled(Box)({
  position: "relative",
});

export const StyledTotalCount = styled("div")({
  backgroundColor: "red",
  borderRadius: "10%",
  width: "20px",
  height: "20px",
  position: "absolute",
  top: "0px",
  right: "0px",
  fontSize: "1rem",
  fontWeight: "bold",
  margin: "auto",
});
