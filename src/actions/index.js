import axios from 'axios'
import {
  FETCH_USERS
} from './types'


export function fetchUsers() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const request = axios.get(apiUrl)

  return {
    type: FETCH_USERS,
    payload: request
  }
}
