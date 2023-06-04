import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
export const Container = styled.main`
  width: 100%;
  display: flex;

  padding: 50px 0;
  background-color: ${(props) => props.theme.white};
`;
export const DetailContainer = styled.main`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img-box {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 1 /1;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .film-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .film-item {
    color: ${(props) => props.theme.primary};
    font-size: 18px;
    font-weight: bold;
  }
`;
