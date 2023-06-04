import styled from "styled-components";

export const List = styled.ul`
  width: 700px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
`;

export const Item = styled.li`
  width: calc((100% / 3) - 10px);
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;

  &:nth-of-type(n + 4) {
    margin-top: 10px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .img-box {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 24px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 10px;
  }

  .rank {
    font-size: 14px;
    color: ${(props) => props.theme.secondary};
  }
`;
