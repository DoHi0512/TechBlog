import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PostLayout = styled.div`
  width: 90%;
  display: grid;
  gap: 1.5rem;

  //태블릿,모바일
  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
  }

  //데스크탑
  @media all and (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(10rem, 1fr));
  }
`;

export const Sort = styled.div`
  height: 8rem;
  display: flex;
  width: 90%;
  align-items: center;
  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  span {
    margin-left: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const Cate = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  height: 100%;
`;

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
