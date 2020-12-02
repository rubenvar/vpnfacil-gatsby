import styled from 'styled-components';

export default styled.div`
  table {
    font-size: 14px;
    width: 100%;
    @media only screen and (min-width: 640px) {
      font-size: 15px;
      width: 110%;
      margin-left: -5%;
    }
    thead {
      font-size: 16px;
      tr {
        background-color: var(--secondary200);
      }
      th {
        text-align: left;
      }
    }
    tr {
      height: 43px;
      transition: all 0.3s;
      background-color: white;
      &:nth-child(even) {
        background-color: var(--secondary100);
      }
      &:hover {
        background-color: var(--primary100);
      }
    }
    td {
      padding: 5px 8px 5px 1px;
    }
  }
`;
