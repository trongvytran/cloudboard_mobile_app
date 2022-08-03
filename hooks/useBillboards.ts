import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getBillboards = async () => {
  const { data } = await axios.get('http://localhost:3000/api/billboards')
  return data
}

export default function useBillboards() {
  return useQuery(['billboards'], getBillboards)
}
