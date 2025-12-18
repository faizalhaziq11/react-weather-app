const axios = require("axios");

exports.handler = async function (event, context) {
  const query = event.queryStringParameters;
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.WEATHER_API_URL;
  const location = query.location || "";

  const params = new URLSearchParams({
    key: apiKey,
    q: location,
    days: 10,
    aqi: "no",
    alerts: "no",
  });

  try {
    const response = await axios.get(`${baseUrl}/forecast.json?`, { params });
    // console.log('Forecast data fetched successfully:', response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: "Failed to fetch forecast data" }),
    };
  }
};
