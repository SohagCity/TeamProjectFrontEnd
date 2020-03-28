// if there is a token in localstorage, this grabs it and confirms
// that a user has logged in

export default function authenticated () {
  return localStorage.getItem('usertoken') !== null
}
