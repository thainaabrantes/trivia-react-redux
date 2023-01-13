const TOKEN_API = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const response = await fetch(TOKEN_API);
  const json = await response.json();
  return json.token;
};

export default fetchToken;
