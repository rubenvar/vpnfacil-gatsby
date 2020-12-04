import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// try to get config from local
// localCriteria and localDir will be false (if no window) or empty (falsey) or the criteria
const localDir =
  typeof window !== 'undefined' &&
  JSON.parse(window.localStorage.getItem('dir'));
const localCriteria =
  typeof window !== 'undefined' &&
  JSON.parse(window.localStorage.getItem('criteria'));

// set defaults
const defaultDir = 'down';
const defaultCriteria = { label: 'Puntuación', value: 'rating' };

const initialState = {
  // use local or defaults
  dir: localDir || defaultDir,
  changeDir: () => {},
  criteria: localCriteria || defaultCriteria,
  changeCriteria: () => {},
};

// init Context
const OrderContext = React.createContext(initialState);

function OrderProvider({ children }) {
  // init state with local
  const [dir, setDir] = useState(initialState.dir);
  const [criteria, setCriteria] = useState(initialState.criteria);

  // update local onchange
  useEffect(() => {
    localStorage.setItem('dir', JSON.stringify(dir));
  }, [dir]);
  useEffect(() => {
    localStorage.setItem('criteria', JSON.stringify(criteria));
  }, [criteria]);

  return (
    <OrderContext.Provider
      value={{
        dir,
        changeDir: (d) => {
          // if value passed, use that one
          if (d) return setDir(d);
          // else, set to the opposite
          return dir === 'down' ? setDir('up') : setDir('down');
        },
        criteria,
        changeCriteria: (cr) => setCriteria(cr),
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.object,
};

export { OrderContext, OrderProvider };
