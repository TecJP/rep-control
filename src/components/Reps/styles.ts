import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      padding: 0.6rem 1.6rem;
      text-align: left;
      line-height: 1.5rem;
      background: var(--background-table-header);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }

    tr {
      transition: filter 0.2s;

      &:hover {
        filter: contrast(0.8);
      }
    }

    td {
      padding: 0.6rem 1.6rem;
      border: 0;
      background: var(--background-table-data);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      a {
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;