const React = require('react');
const { ViewProvider } = require('./src/context/ViewContext');
const { OrderProvider } = require('./src/context/OrderContext');

exports.wrapRootElement = ({ element }) => (
  <OrderProvider>
    <ViewProvider>{element}</ViewProvider>
  </OrderProvider>
);
