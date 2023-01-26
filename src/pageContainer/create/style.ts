import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 90%;
  height: 100%;
`;
export const Title = styled.input`
  &:focus {
    outline: none;
  }
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  border: 1px solid gray;
`;
export const Info = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const Submit = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 4rem;
`;

interface BtnProps {
  bgcolor: string;
  txtcolor: string;
  hoverBgcolor: string;
}
export const Btn = styled.div<BtnProps>`
  height: 80%;
  width: 12rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.txtcolor};
  &:hover {
    background-color: ${(props) => props.hoverBgcolor};
    transition: 0.15s;
  }
`;
