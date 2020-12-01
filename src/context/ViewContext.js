import React, { useEffect, useState } from 'react';

// try to get config from local
const localTable = JSON.parse(
  typeof window !== 'undefined' && window.localStorage.getItem('tableView')
);

const initialState = {
  // use local or false
  table: localTable || false,
  toggleTable: () => {},
};

// init Context
const ViewContext = React.createContext(initialState);

function ViewProvider({ children }) {
  // init state with local
  const [table, setTable] = useState(initialState.table);

  // update local onchange
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.localStorage.setItem('tableView', JSON.stringify(table));
  }, [table]);

  return (
    <ViewContext.Provider
      value={{
        table,
        toggleTable: () => setTable(!table),
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export { ViewContext, ViewProvider };
