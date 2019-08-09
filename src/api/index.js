import config from './config'
const API_KEY = config.apiKeyAPI
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${API_KEY}&format=json`

export default function getArtists(country){
  const URLN = URL.replace(':country',country)
  return fetch(URLN)
  .then(res => res.json())
  .then(json => json.topartists.artist)
}
