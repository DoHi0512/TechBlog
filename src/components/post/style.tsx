import styled, { keyframes } from "styled-components";
export const Preview = styled.div`
  width: 100%;
  height: 80%;
  display: none;
  position: absolute;
`;
export const Img = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
export const Post = styled.div`
  position: relative;
  border: 1px solid;
  border-radius: 1rem;
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
    ${Preview} {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: flex;
      background-color: rgba(255, 255, 255, 0.9);
      justify-content: center;
    }
  }
  &:not(:hover) {
    transition: 0.3s;
  }
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

export const Desc = styled.div`
  line-height: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;
