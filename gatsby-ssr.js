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
  <Layout {...props}>{element}</Layout>
);
