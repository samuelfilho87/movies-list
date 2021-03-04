import styled from 'styled-components';

export const Table = styled.table`
  min-width: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12);
  background: #FFFFFF;
  border-collapse: collapse;
  table-layout: fixed;

  th {
    padding: 8px;
    font-size: 14px;
    text-transform: uppercase;
    background: #00000050;

    &.td-min {
      min-width: 200px;
    }
  }

  tr {
    transition: all 0.3s;

    &:hover {
      background: #f2f2f2;
    }

    td {
      padding: 8px;
      font-size: 12px;
  
      &:first-child {
        text-align: center;
      }
    }
  }
`;

export const BoxActions = styled.div`
  display: flex;
  gap: 4px;

  svg {
    transition: all 0.3s;
    cursor: pointer;

    &.delete:hover {
      color: red;
    }

    &.edit:hover {
      color: green;
    }
  }
`;
