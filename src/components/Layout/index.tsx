import { Grid } from "@chakra-ui/layout";
import React from "react";
import { Footer, Header } from "../../container";
interface Props {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grid>
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};
export default Layout;
