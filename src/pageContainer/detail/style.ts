import styled from "styled-components";
import { Themeprovider } from "../../styles/theme";
export const Layout = styled(Themeprovider)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  @media all and (min-width: 1024px) {
    width: 60%;
  }
  @media all and (max-width: 1024px) {
    width: 85%;
  }
  height: auto;
`;
export const Title = styled.div`
  font-size: 5.5rem;
  font-weight: bold;
  line-height: 8rem;
`;
export const Info = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: space-between;
  width: 100%;
`;

export const Handler = styled.div`
  span {
    color: #12b886;
  }
  display: flex;
  width: 8rem;
  justify-content: space-between;
`;

export const Cursor = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
