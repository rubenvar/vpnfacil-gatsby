import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// try to get config from local
const localTable = JSON.parse(
  typeof window !== 'undefined' && window.localStorage.getItem('tableView')
);

const initialState = {
  // use local or false
  table: localTable || false,
  toggleTable: () => {},
  forceBlockView: () => {},
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
    console.log({ table });
  }, [table]);

  return (
    <ViewContext.Provider
      value={{
        table,
        toggleTable: () => setTable(!table),
        forceBlockView: () => setTable(false),
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

ViewProvider.propTypes = {
  children: PropTypes.object,
};

export { ViewContext, ViewProvider };
