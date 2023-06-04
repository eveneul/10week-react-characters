import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  /* width: calc(100% / 4); */
  background-color: ${(props) => props.theme.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  transition: all 0.4s;

  &:hover {
    box-shadow: 5px 8px 19px -7px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.primary};

    .title-box {
      .title {
        color: ${(props) => props.theme.white};
      }
    }
  }

  a {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .img-box {
    width: 280px;
    height: 280px;
    aspect-ratio: 1/ 1;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title-box {
    .title {
      color: ${(props) => props.theme.primary};
    }
  }
`;
