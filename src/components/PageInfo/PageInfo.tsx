import React, { useState } from "react";
import {
  PageInfoFilterTab,
  PageInfoFilterWrapper,
  PageInfoSearch,
  PageInfoSearchIco,
  PageInfoSearchWrapper,
  PageInfoText,
  PageInfoTitle,
  PageInfoWrapper,
} from "./styled";
import PageInfoFilters from "../PageInfoFilters/PageInfoFilters";

const PageInfo = ({ filterTabs }) => {
  return (
    <PageInfoWrapper>
      <PageInfoTitle>MaileHereko</PageInfoTitle>
      <PageInfoText>
        List of movies and TV Shows, I, Pramod Poudel have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </PageInfoText>
      <PageInfoFilters filterTabs={filterTabs} />
    </PageInfoWrapper>
  );
};

export default PageInfo;
