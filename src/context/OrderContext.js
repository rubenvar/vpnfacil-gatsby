import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// try to get config from local
const localDecrease = JSON.parse(
  typeof window !== 'undefined' && window.localStorage.getItem('decrease')
);
const localCriteria = JSON.parse(
  typeof window !== 'undefined' && window.localStorage.getItem('criteria')
);

const initialState = {
  // use local or false
  decrease: localDecrease || false,
  toggleDecrease: () => {},
  changeDecrease: () => {},
  criteria: localCriteria || null,
  changeCriteria: () => {},
};

// init Context
const OrderContext = React.createContext(initialState);

function OrderProvider({ children }) {
  // init state with local
  const [decrease, setDecrease] = useState(initialState.decrease);
  const [criteria, setCriteria] = useState(initialState.criteria);

  // update local onchange
  useEffect(() => {
    localStorage.setItem('decrease', JSON.stringify(decrease));
  }, [decrease]);
  useEffect(() => {
    localStorage.setItem('criteria', JSON.stringify(criteria));
  }, [criteria]);

  return (
    <OrderContext.Provider
      value={{
        decrease,
        toggleDecrease: () => setDecrease(!decrease), // use this one just to toggle
        changeDecrease: (d) => setDecrease(d), // and this one to set specific true or false
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
