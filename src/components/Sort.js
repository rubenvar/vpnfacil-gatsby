import React, { useContext } from 'react';
import Select from 'react-select';

import { OrderContext } from '../context/OrderContext';
import { StyledSort, styles, theme } from './styles/SortStyles';

const options = [
  { label: 'Puntuación', value: 'rating' },
  { label: 'Servidores', value: 'servers' },
  { label: 'Países', value: 'countries' },
  { label: 'Dispositivos', value: 'devices' },
  { label: 'Alfabético', value: 'name' },
];

export default function Sort() {
  // get Context
  const { dir, changeDir, criteria, changeCriteria } = useContext(OrderContext);

  const handleChange = (res) => {
    // re-sort
    changeCriteria(res);
    // when re-sorting, always to default dir
    changeDir('down');
  };

  return (
    <StyledSort>
      <p>Ordena</p>
      <div className="buttons">
        <Select
          isSearchable={false}
          defaultValue={criteria} // use default coming from context
          options={options}
          styles={styles}
          theme={theme}
          onChange={handleChange}
        />
        <button type="button" onClick={() => changeDir()} title="Cambiar orden">
          {dir === 'down' ? '⬆' : '⬇'}
        </button>
      </div>
    </StyledSort>
  );
}
