import styled from "styled-components";
import { ThemeType } from "../type/theme";

export const Themeprovider = styled.div<ThemeType>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  transition: 0.15s;
`;
