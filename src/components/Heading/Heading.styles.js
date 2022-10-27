import styled from "styled-components";
import { ReactComponent as StackLineLogo } from "../SVG/stackline_logo.svg";

export const MainContainer = styled.div`
  background-color: #052849;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledLogo = styled(StackLineLogo)`
  height: 100px;
  width: 100px;
  padding-left: 30px;
`;
