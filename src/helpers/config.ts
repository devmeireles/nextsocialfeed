const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const config = {
  apiBaseUrl,
  apiFeedUrl: `${apiBaseUrl}/content`,
};

export default config;
