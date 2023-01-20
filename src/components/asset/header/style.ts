import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  .modal {
    width: 55rem;
    height: 60rem;
    box-shadow: 3px 3px 1000px 1000px rgba(0, 0, 0, 0.5);
  }
`;
export const HeaderCenter = styled.div`
  > *:hover {
    cursor: pointer;
  }
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
`;

export const Login = styled.div`
  width: 11.5rem;
  border: 1px solid;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3.5rem;
  &:hover {
    background-color: black;
    color: white;
    transition: linear 0.15s;
  }
  &:not(:hover) {
    transition: linear 0.15s;
  }
`;
export const HeaderIconName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  > .icon {
    width: auto;
    height: 4rem;
  }
`;
export const Username = styled.div`
  margin-left: 1rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1.5rem;
  }
  .icon {
    width: auto;
    height: 4rem;
  }
`;

export const CreatePost = styled(Login)`
  &:hover {
    background-color: black;
    color: white;
    transition: linear 0.15s;
  }
  &:not(:hover) {
    transition: linear 0.15s;
  }
`;

export const Profile = styled.div`
  &:hover {
    cursor: pointer;
    .icon {
      color: black;
      transition: linear 0.15s;
    }
  }
  &:not(:hover) {
    .icon {
      transition: linear 0.15s;
    }
  }
  .icon {
    color: gray;
    width: 3rem;
  }
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > .icon {
    color: gray;
    width: 1.3rem;
    margin-left: 1rem;
  }
`;
