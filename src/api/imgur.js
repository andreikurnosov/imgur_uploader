import qs from 'qs'

const CLIENT_ID = 'de9b668bf02109f'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`
  }
}

