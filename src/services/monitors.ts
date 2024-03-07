import useSWR from 'swr';
import { host } from './backend';
import axios from 'axios';

function getMonitors() {
  const url = `${host}/monitors/`;
  console.log(url);
  return axios.get(url).then(
    result => result.data
  )
}

export function useMonitors() {
    return useSWR('/monitors', getMonitors);
}
