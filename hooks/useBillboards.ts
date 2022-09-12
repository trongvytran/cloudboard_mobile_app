import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {BASE_URL} from '../constants/endpoints'

const getBillboards = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/billboards`)
  return data
}

export default function useBillboards() {
  return useQuery(['billboards'], getBillboards)
}
