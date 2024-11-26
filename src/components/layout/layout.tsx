import { FC } from "react";
import { Header } from "../header";
import { Box, Container } from "@mui/material";
import { Footer } from "../footer";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Box component={"main"} flexGrow={1}>
        <Container
          maxWidth="lg"
          sx={{ bgcolor: "var(--white)", height: "100%" }}
        >
          Привет
        </Container>
      </Box>
      <Footer />
    </>
  );
};
