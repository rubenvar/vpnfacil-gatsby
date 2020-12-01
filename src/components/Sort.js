import React, { useContext } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { OrderContext } from '../context/OrderContext';

const StyledSort = styled.div`
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

export default function Sort() {
  const {
    decrease,
    toggleDecrease,
    changeDecrease,
    criteria,
    changeCriteria,
  } = useContext(OrderContext);

  const options = [
    { id: 1, label: 'Puntuación', value: 'rating' },
    { id: 2, label: 'Servidores', value: 'servers' },
    { id: 3, label: 'Países', value: 'countries' },
    { id: 4, label: 'Dispositivos', value: 'devices' },
    { id: 5, label: 'Alfabético', value: 'name' },
  ];

  const defaultValue =
    criteria || options.find((obj) => obj.value === 'rating');

  const styles = {
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

  const theme = (prov) => ({
    ...prov,
    colors: {
      ...prov.colors,
      primary: 'hsl(160, 65%, 44%)',
      primary25: 'hsl(160, 59%, 79%)',
      neutral20: 'hsl(160, 5%, 50%)',
      neutral30: 'hsl(160, 5%, 30%)',
    },
  });

  return (
    <StyledSort>
      <p>Ordena</p>
      <div className="buttons">
        <Select
          isSearchable={false}
          defaultValue={defaultValue}
          options={options}
          styles={styles}
          theme={theme}
          onChange={(res) => {
            changeCriteria(res);
            changeDecrease(false);
          }}
        />
        <button type="button" onClick={toggleDecrease} title="Cambiar orden">
          {decrease ? '⬇' : '⬆'}
        </button>
      </div>
    </StyledSort>
  );
}
