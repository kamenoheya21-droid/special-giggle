import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <p>- styled component</p>
      <button>FIGHT</button>
    </SContainer>
  );
}

const SContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;