export default function authenticated () {
  return localStorage.getItem('usertoken') !== null
}
