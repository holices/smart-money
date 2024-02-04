import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 4rem 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`