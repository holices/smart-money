import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1.6rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border: 0;
    padding: 1.6rem;
    background: transparent;
    border: 1px solid ${props => props.theme['green-300']};
    color: ${props => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme['green-500']};
      color: ${props => props.theme['white']};
      border: 1px solid ${props => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, color 0.2s;
    }
  }
`