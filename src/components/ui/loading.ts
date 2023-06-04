import styled from "styled-components";

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;
