import styled from "styled-components";
import { Themeprovider } from "../../styles/theme";
export const MainLayout = styled(Themeprovider)`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PostLayout = styled.div`
  transition: 0.35s;
  width: 85%;
  display: grid;
  gap: 5rem;
  //태블릿,모바일
  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
  }

  //데스크탑
  @media all and (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
  }
`;

export const Sort = styled.div`
  height: 8rem;
  display: flex;
  width: 85%;
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
