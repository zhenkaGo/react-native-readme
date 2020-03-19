import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const APP_API_URL = 'XXX'

export const makeUrl = (strings, ...values) => args =>
  values.reduceRight((a, v, i) => `${strings[i]}${args[v]}${a}`, strings[strings.length - 1])

let accessToken = ''
export function request(method, url, isAuth = true) {
  return async args => {
    if (!accessToken) {
      accessToken = await AsyncStorage.getItem('accessToken')
    }
    const actualUrl = typeof url === 'function' ? url(args) : `${url}`
    let headers = {
      'Content-Type': 'application/json',
    }
    if (isAuth) {
      headers = {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return axios({
      method,
      url: `${APP_API_URL}${actualUrl}`,
      headers,
      ...args,
    })
  }
}
