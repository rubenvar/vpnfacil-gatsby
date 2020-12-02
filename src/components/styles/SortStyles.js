import styled from 'styled-components';

export const StyledSort = styled.div`
  p {
    color: var(--grey500);
    margin: 0 0 5px;
  }

  .buttons {
    display: flex;
    button {
      margin-left: 12px;
      color: #444;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      border: 1px solid #ddd;
      border-radius: var(--buttonRadius);
      background-color: #fff;
      cursor: pointer;
      transition: all 0.3s;
      padding: 0 10px;
    }
  }
`;

export const theme = (prov) => ({
  ...prov,
  colors: {
    ...prov.colors,
    primary: 'hsl(160, 65%, 44%)',
    primary25: 'hsl(160, 59%, 79%)',
    neutral20: 'hsl(160, 5%, 50%)',
    neutral30: 'hsl(160, 5%, 30%)',
  },
});

export const styles = {
  control: (prov) => ({
    ...prov,
    borderRadius: '10px',
    borderColor: '#ddd',
  }),
  container: (prov) => ({ ...prov, width: '100%' }),
  menu: (prov) => ({ ...prov, zIndex: '999' }),
  singleValue: (prov) => ({ ...prov, color: '#444' }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (prov) => ({ ...prov, color: 'hsl(160, 65%, 44%)' }),
};
