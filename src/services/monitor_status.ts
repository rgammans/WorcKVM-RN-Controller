import useSWR from 'swr';
import { host } from './backend';
import axios from 'axios';

function getMonitorStatus(uuid: string) {
  const urluuid = uuid.replaceAll('-','');
  const url = `${host}/monitor/${urluuid}/status`;
  console.log(url);
  return axios.get(url).then(
    result => result.data
  )
}

 function getAvailableSources(uuid: string) {
   const urluuid = uuid.replaceAll('-','');
  const url = `${host}/monitor/${urluuid}/available`;
  console.log(url);
  return axios.get(url).then(
    result => result.data
  ) 
 }

export function useHidStatus(uuid: string) {
    return useSWR(['../available', uuid ], 
                  ([tag, uuid]) => getMonitorStatus(uuid));
}

export function useAvailableSources(uuid: string) {
    return useSWR(['../sources', uuid], 
                  ([tag, uuid]) => getAvailableSources(uuid));
}
