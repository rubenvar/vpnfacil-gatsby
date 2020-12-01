require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const axios = require('axios');
const { awsConfig } = require('./config');

exports.createPages = async ({ actions: { createPage } }) => {
  async function getVpns() {
    const response = await axios.get(process.env.ENDPOINT, awsConfig);
    if (response.data.statusCode !== 200) return [];
    return response.data.body;
  }

  // fetch data
  const allVpns = await getVpns();

  // list all
  createPage({
    path: `/all`,
    component: require.resolve('./src/templates/all.js'),
    context: { allVpns },
  });

  // each VPN
  allVpns.forEach((vpn) => {
    createPage({
      path: `/vpn/${vpn.slug}/`,
      component: require.resolve('./src/templates/vpn.js'),
      context: { vpn },
    });
  });
};