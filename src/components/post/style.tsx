import styled from "styled-components";
export const Post = styled.div`
  border-radius: 1.5rem;
  background: aqua;
  width: 100%;
  height: 20rem;
  grid-column: auto;
`;
export const DescLayout = styled.div`
  width: 100%;
  height: 80%;
  border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Desc = styled.div`
  font-size: 1.5rem;
  height: 90%;
  width: 90%;
  > span {
    white-space: normal;
    width: 5rem;
    height: auto;
  }
`;

export const AuthorLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
  align-items: center;
`;
export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 90%;
  font-size: 1.3rem;
`;
