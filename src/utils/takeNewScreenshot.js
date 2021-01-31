/* eslint-disable no-console */
import axios from 'axios';

export async function takeNewScreenshot(id, baseUrl) {
  // call lambda (async)
  const body = {
    url: baseUrl,
    cloudinaryFolder: 'vpnf/screenshots',
    fileName: id,
    width: 1920,
    height: 1080,
  };
  // const config = {
  //   headers: {
  //     // 'Content-Type': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     // 'x-api-key': process.env.AWS_API_KEY,
  //     // 'Access-Control-Allow-Origin': '*',
  //   },
  // };
  await axios
    // .post(process.env.SCREENSHOT_LAMBDA, body, config)
    .post(
      'https://vgi7w4s9d1.execute-api.eu-west-1.amazonaws.com/dev',
      body
      // config
    )
    .then(({ status, data }) => {
      console.log({ status });
      console.log({ data });
    })
    .catch((error) => {
      console.log('⚠️ 🐛 ⚠️ 🐛 ⚠️ 🐛 There was an error ↓');
      console.log(error);
      console.log('⚠️ 🐛 ⚠️ 🐛 ⚠️ 🐛 There was an error ↑');
    });
}

// async function postScreenshot(code, shot) {
//   // log screenshot
//   console.log('posting screenshot here! ⬇');
//   const screenshot = shot.replace('http://', 'https://');
//   console.log({ code, screenshot });
//   const postToURI =
//     'https://53w2ggh3og.execute-api.eu-west-1.amazonaws.com/dev/list/update-screenshot';
//   await axios
//     .post(postToURI, {
//       code,
//       screenshot,
//     })
//     .then((res) => {
//       console.log('posted!');
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
