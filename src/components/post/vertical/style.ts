import styled from "styled-components";
export const Info = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Post = styled.div`
  width: 100%;
  height: 23rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  &:hover {
    ${Info} {
      transform: translateX(1rem);
      transition: 0.5s;
    }
  }
  &:not(:hover) {
    ${Info} {
      transition: 0.5s;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 20%;
  height: 100%;
`;
export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Desc = styled.div`
  margin-bottom: 5rem;
  height: 5.4rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #777777;
`;
export const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
