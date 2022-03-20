import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const PageInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 600px;
`;

export const PageInfoTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--gray50);
  margin-bottom: 16px;
`;

export const PageInfoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--gray300);
  margin-bottom: 24px;
`;

export const PageInfoSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--black10);
  max-width: 344px;
  width: 100%;
  padding-left: 16px;
  border: 1px solid var(--gray700);
  border-radius: 12px;
  margin-bottom: 80px;
`;

export const PageInfoSearch = styled.input`
  background: transparent;
  border: 0;
  outline: none;
  padding: 20px 16px;
  width: 100%;
  color: var(--color);
  &::placeholder {
    color: var(--gray600);
  }
`;

export const PageInfoSearchIco = styled(IoSearch)`
  fill: var(--gray600);
`;

export const PageInfoFilterWrapper = styled.div`
  background: var(--black10);
  padding: 8px;
  display: flex;
  backdrop-filter: blur(80px);
  border-radius: 12px;
`;
export const PageInfoFilterTab = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--gray300);
  padding: 8px 32px;
  display: flex;
  cursor: pointer;
  &[data-active="true"] {
    color: var(--color);
    background: #7b6ef6;
    border-radius: 8px;
  }
`;
