const { default: axios } = require("axios");

const get = async (url, params) => {
  const movie_token = process.env.MOVIE_TOKEN;
  const api_url = process.env.API;
  return await axios.get(
    `${api_url}${url}`,

    {
      headers: {
        Accept: "application/json",
        Authorization: movie_token,
      },
      params: {
        ...params,
      },
    }
  );
};

module.exports = { get };
