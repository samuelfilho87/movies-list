import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  span {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;

    svg {
      margin-left: 4px;
    }
  }
`;
