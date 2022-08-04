import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import BaseUrl from '../constants/baseUrl'

const getBillboards = async () => {
  const { data } = await axios.get(`${BaseUrl}/api/billboards`)
  return data
}

export default function useBillboards() {
  return useQuery(['billboards'], getBillboards)
}
