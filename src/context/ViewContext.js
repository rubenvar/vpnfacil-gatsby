import PropTypes from 'prop-types';
import React, { useState } from 'react';

// remove local storage for now:
// we can't persist table view settings,
// but at least it doesn't screw the view on refresh, etc.

// try to get config from local
// const localTable =
//   typeof window !== 'undefined'
//     ? JSON.parse(window.localStorage.getItem('tableView'))
//     : true;

const initialState = {
  // use local or false
  table: true,
  // table: localTable || false,
  toggleTable: () => {},
  forceBlockView: () => {},
};

// init Context
const ViewContext = React.createContext(initialState);

function ViewProvider({ children }) {
  // init state with local
  const [table, setTable] = useState(initialState.table);

  // update local onchange
  // useEffect(() => {
  //   if (typeof window !== 'undefined')
  //     window.localStorage.setItem('tableView', JSON.stringify(table));
  // }, [table]);

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
