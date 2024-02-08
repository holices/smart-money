import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 4rem 16rem;
  height: 21.1rem;
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

export const NewTransactionButton = styled.button`
  height: 5rem;
  border: 0;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`