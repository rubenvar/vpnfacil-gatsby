exports.awsConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.AWS_API_KEY,
  },
};
