import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: grid;
  grid-template-columns: repeat(3, 1gr);
  gap: 3.2rem;

  margin-top: 8rem;

  background-color: ${props => props.theme["gray-600"]};
`