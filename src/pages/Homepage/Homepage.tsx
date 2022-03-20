import React from "react";
import Main from "../../components/Main/Main";
import PageInfo from "../../components/PageInfo/PageInfo";
import { Tfilter } from "../../models/interfaces";

const Homepage = () => {
  const filterTabs: Array<Tfilter> = [
    {
      label: "All",
      active: true,
    },
    {
      label: "Movies",
      active: false,
    },
    {
      label: "TV Shows",
      active: false,
    },
  ];
  return (
    <Main>
      <PageInfo filterTabs={filterTabs}></PageInfo>
    </Main>
  );
};

export default Homepage;
