import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

import { OrderContext } from '../context/OrderContext';
import { StyledSort, styles, theme } from './styles/SortStyles';

const options = [
  { label: 'Puntuación', value: 'rating' },
  { label: 'Servidores', value: 'servers' },
  { label: 'Países', value: 'countries' },
  { label: 'Dispositivos', value: 'devices' },
  { label: 'Alfabético', value: 'name' },
];

const defaultOptionValue = 'rating';

// (https://dev.to/5t3ph/how-to-use-url-query-string-parameters-in-gatsby-a71)
const getSorting = (query) => {
  if (query) {
    // parse the url query
    const queriedConf = queryString.parse(query);
    // get the key-value pair we need (sort)
    const { sort } = queriedConf;
    // return value if valid, or fallback
    if (options.map((obj) => obj.value).includes(sort)) return sort;
    return defaultOptionValue;
  }
  // fallback if no valid query in url
  return defaultOptionValue;
};

export default function Sort() {
  const {
    decrease,
    toggleDecrease,
    changeDecrease,
    criteria,
    changeCriteria,
  } = useContext(OrderContext);

  // Get url query for sorting:
  const location = useLocation();
  // send url query to parse, if not valid use ls criteria, if not, default
  const sortingUrlQuery =
    (location.search && getSorting(location.search)) ||
    criteria ||
    defaultOptionValue;
  const [sorting, setSorting] = useState(
    options.find((opt) => opt.value === sortingUrlQuery)
  );

  useEffect(() => {
    changeCriteria(sorting);
  }, [sorting]);

  console.log(sorting);

  const defaultValue =
    sorting || options.find((obj) => obj.value === defaultOptionValue);

  const handleChange = (res) => {
    // update 'sorting criteria' and 'decrease' in Context (which changes the LS too)
    changeCriteria(res);
    changeDecrease(false);
    // update the url query
  };

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
          onChange={handleChange}
        />
        <button type="button" onClick={toggleDecrease} title="Cambiar orden">
          {decrease ? '⬇' : '⬆'}
        </button>
      </div>
    </StyledSort>
  );
}
