const TRIVIA_API = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const response = await fetch(TRIVIA_API);
  const json = await response.json();
  return json.token;
};

export default fetchToken;
