import styled, { keyframes } from "styled-components";

export const Post = styled.div`
  border: 1px solid;
  border-radius: 1.5rem;
  width: 100%;
  height: 23rem;
  grid-column: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    transform: translateY(-1rem);
    transition: 0.3s;
    cursor: pointer;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;
export const Info = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.3rem;
  }
`;
