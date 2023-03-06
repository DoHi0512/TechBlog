import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
interface SortProps {
  width: string;
  columns: number;
  gap: string;
}
export const PostLayout = styled.div<SortProps>`
  transition: 0.35s;
  width: ${(props) => props.width};
  display: grid;
  gap: ${(props) => props.gap};
  //태블릿,모바일
  @media all and (max-width: 1024px) {
    width: 90%;
    grid-template-columns: repeat(
      ${(props) => (props.width === "50%" ? 1 : 2)},
      minmax(10rem, 1fr)
    );
  }

  //데스크탑
  @media all and (min-width: 1024px) {
    grid-template-columns: repeat(
      ${(props) => props.columns},
      minmax(10rem, 1fr)
    );
  }
`;

export const Sort = styled.div`
  height: 8rem;
  display: flex;
  width: 90%;
  align-items: center;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  span {
    margin-left: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  .hidden {
    @media all and (max-width: 1024px) {
      display: none;
    }
  }
`;
interface MenuProps {
  degree?: string;
}
export const Cate = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  margin-right: 5rem;
  height: 100%;
  svg {
    transition: 0.2s;
    transform: rotate(${(props) => props.degree});
  }
`;
