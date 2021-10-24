 import React from "react";
import { Banner, Product } from "../container";
import { useTitle } from "../hooks";
interface Props {
}
const Home:React.FC<Props> = ({  }) => {

  return (
    <>
      <Banner />
      <Product />
    </>
  )
}
export default Home;