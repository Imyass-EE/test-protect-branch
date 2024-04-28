export async function getUsersService() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}
