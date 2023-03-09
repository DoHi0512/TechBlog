import styled from "styled-components";
import { Themeprovider } from "../../../styles/theme";

export const HeaderLayout = styled(Themeprovider)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
`;
export const HeaderCenter = styled.div`
  > *:hover {
    cursor: pointer;
  }
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Themeprovider)`
  transition: 0.15s;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Btn = styled(Themeprovider)`
  transition: 0.15s;
  width: 11.5rem;
  border: 1px solid ${(props) => props.background};
  color: ${(props) => props.text};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: linear 0.05s;
  }
  &:not(:hover) {
    transition: linear 0.05s;
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > * {
    margin-left: 1.5rem;
  }
  svg {
    width: auto;
    height: 3rem;
  }
`;

export const ChangeTheme = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 9rem;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2rem;
  height: 3rem;
`;
export const ON = styled.div`
  position: absolute;
  margin-left: 6.75rem;
  font-size: 1.2rem;
  font-weight: bolder;
`;
interface TransType {
  rotateX: string;
}
export const Moon = styled.div<TransType>`
  border: 1px solid black;
  z-index: 2;
  background-color: black;
  border-radius: 2rem;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  svg {
    margin-right: 0.5rem;
    color: white;
    width: 1.5rem;
  }
  transform: translateX(${(props) => props.rotateX});
  transition: 0.5s;
`;
