import React, { useState } from "react";
import {
  PageInfoFilterTab,
  PageInfoFilterWrapper,
  PageInfoSearch,
  PageInfoSearchIco,
  PageInfoSearchWrapper,
} from "../PageInfo/styled";

const PageInfoFilters = ({ filterTabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const setIsActive = (id: number) => {
    setActiveTab(id);
  };
  return (
    <>
      <PageInfoSearchWrapper>
        <PageInfoSearchIco size={25} />
        <PageInfoSearch placeholder="Search Movies or TV Shows"></PageInfoSearch>
      </PageInfoSearchWrapper>
      <PageInfoFilterWrapper>
        {filterTabs?.map((f, idx) => {
          return (
            <PageInfoFilterTab
              key={idx}
              data-active={activeTab === idx && "true"}
              onClick={() => setIsActive(idx)}
            >
              {f.label}
            </PageInfoFilterTab>
          );
        })}
      </PageInfoFilterWrapper>
    </>
  );
};

export default PageInfoFilters;
