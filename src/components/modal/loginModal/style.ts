import styled from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 55rem;
  height: 55rem;
  position: absolute;
  background-color: white;
  border: 1px solid #DCDCDC;
  border-radius: 1rem;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  height: 12rem;
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 12rem;
`;
export const OAuthBox = styled.div`
  width: 70%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
`;

interface OAuthProps {
  bgcolor: string;
  color: string;
}
export const OAuth = styled.div<OAuthProps>`
  box-shadow: 2px 2px 2px 2px #dcdcdc;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  .icon {
    width: 3rem;
    height: 3rem;
  }
  > span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1.5rem;
  }
`;
export const InputBox = styled.div`
  margin-top: 5rem;
  width: 70%;
`;
export const InputItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.2rem;
  }
  input {
    background-color: #f7f7f7;
    &:focus {
      outline: none;
    }
    padding-left: 1rem;
    margin-top: 0.7rem;
    height: 5rem;
    border-radius: 1rem;
    border: 1px solid #dcdcdc;
    font-size: 1.5rem;
  }
`;
export const Submit = styled.button`
  width: 100%;
  height: 4.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #272e33;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;
