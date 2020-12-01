import React, { useEffect, useState } from 'react';

// try to get config from local
// const localTable = JSON.parse(localStorage.getItem('tableView'));

const initialState = {
  // use local or false
  // table: localTable || false,
  // toggleTable: () => {},
  decrease: true,
  toggleDecrease: () => {},
};

// init Context
const OrderContext = React.createContext(initialState);

function OrderProvider({ children }) {
  // init state with local
  const [decrease, setDecrease] = useState(initialState.decrease);

  // update local onchange
  // useEffect(() => {
  //   localStorage.setItem('tableView', JSON.stringify(decrease));
  // }, [decrease]);

  return (
    <OrderContext.Provider
      value={{
        decrease,
        toggleDecrease: () => setDecrease(!decrease),
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
