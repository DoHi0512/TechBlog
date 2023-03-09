import styled, { keyframes } from "styled-components";
import { Themeprovider } from "../../styles/theme";

export const Img = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;
export const Post = styled(Themeprovider)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  &:hover {
    transform: translateY(-1rem);
    transition: 0.3s;
    cursor: pointer;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const Title = styled.div`
  height: 4.5rem;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Preview = styled.div`
  margin-top: 1rem;
  font-size: 2.5rem;
  color: #777777;
  line-height: 2.7rem;
  font-weight: lighter;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Info = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Tag = styled.div`
  font-size: 1.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: #12b886;
  background-color: #f5f5f5;
  margin-right: 2rem;
  > span {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Date = styled.div`
  font-size: 1.5rem;
  color: #777777;
`;
