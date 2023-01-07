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
