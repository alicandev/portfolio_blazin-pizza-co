import axios from 'axios';

export const postLogin = (
  email, password, setAuthTokens, setIsLoggedIn, setIsError,
) => {
  axios.post('http://localhost:4000/members/login', {
    email,
    password,
  }).then((result) => {
    if (result.status === 200) {
      setAuthTokens(result.data);
      setIsLoggedIn(true);
    } else {
      setIsError(true);
    }
  }).catch(() => (setIsError(true)));
};

export const postRegister = (
  email, password, passwordConfirmation, setAuthTokens, setIsLoggedIn, setIsError,
) => (
  axios.post('http://localhost:4000/members/register', {
    email,
    password,
    passwordConfirmation,
  }).then((result) => {
    if (result.status === 200) {
      setAuthTokens(result.data);
      setIsLoggedIn(true);
    } else {
      setIsError(true);
    }
  }).catch(() => (setIsError(true)))
);

export const validateAuthTokens = (user, token, setIsLoggedIn) => (
  axios.post('http://localhost:4000/members/validateToken', {
    user,
    token,
  }).then((result) => {
    if (result.status === 200) {
      setIsLoggedIn(true);
    }
  }).catch(() => {
    setIsLoggedIn(false);
  })
);

export const getToppings = () => (
  axios.get('http://localhost:4000/toppings')
    .then((result) => (
      result.status === 200 && result.data
    ))
);

export const getSides = () => (
  axios.get('http://localhost:4000/sides')
    .then((result) => (
      result.status === 200 && result.data
    ))
);

export const getDrinks = () => (
  axios.get('http://localhost:4000/drinks')
    .then((result) => (
      result.status === 200 && result.data
    ))
);
