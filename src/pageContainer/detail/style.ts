import styled from "styled-components";
export const Layout = styled.div`
  width: 100%;
  height: 100%;
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
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: space-between;
  width: 10rem;
`;
export const Author = styled.div`
  font-weight: bold;
`;
export const Date = styled.div``;
