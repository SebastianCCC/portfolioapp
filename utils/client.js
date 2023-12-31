import axios from 'axios'

export function authClient(URL, token) {
  const client = axios.create({
    baseURL: URL,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })

  return client
}

export function client(URL) {
  const client = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })

  return client
}

export function urlencodedClient(URL, path, method, data) {
  const client = fetch(URL + path, {
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
    signal: AbortSignal.timeout(10000),
  })

  return client
}
