import styled from "styled-components";
export const CloseButton = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: right;
  .icon {
    margin-top: 1rem;
    margin-right: 2rem;
    width: auto;
    height: 100%;
  }
`;
export const LoginLayout = styled.div`
  box-shadow: 3px 3px 1000px 1000px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 55rem;
  height: 60rem;
  position: absolute;
  background-color: white;
  border: 1px solid #dcdcdc;
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
  width: 100%;
  height: 4.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #272e33;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Info = styled.span`
  font-size: 1.15rem;
  font-weight: bold;
  color: gray;
  margin-top: 2rem;
  span {
    text-decoration: underline;
    text-underline-position: under;
    &:hover {
      cursor: pointer;
    }
  }
`;
