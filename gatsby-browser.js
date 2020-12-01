require('fontsource-ubuntu/latin.css');
require('fontsource-quicksand/latin.css');
require('fontsource-audiowide/latin.css');
const React = require('react');
const { ViewProvider } = require('./src/context/ViewContext');
const { OrderProvider } = require('./src/context/OrderContext');

exports.wrapRootElement = ({ element }) => (
  <OrderProvider>
    <ViewProvider>{element}</ViewProvider>
  </OrderProvider>
);
