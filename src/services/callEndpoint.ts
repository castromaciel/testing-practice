import axios from 'axios'

export const callEndpoint = async (body: any):Promise<any> => {
  const { data } = await axios.post('https://rickandmortyapi.com/api/character', body)
  return data
}
