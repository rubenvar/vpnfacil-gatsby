/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react');
const { ViewProvider } = require('./src/context/ViewContext');
const { OrderProvider } = require('./src/context/OrderContext');
const Layout = require('./src/components/Layout').default;

exports.wrapRootElement = ({ element }) => (
  <OrderProvider>
    <ViewProvider>{element}</ViewProvider>
  </OrderProvider>
);

exports.wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);
