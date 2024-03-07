import useSWR from 'swr';
import { mutate } from 'swr';
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
    return useSWR(['../status', uuid ], 
                  ([tag, uuid]) => getMonitorStatus(uuid));
}

export function useAvailableSources(uuid: string) {
    return useSWR(['../sources', uuid], 
                  ([tag, uuid]) => getAvailableSources(uuid));
}

async function do_grabhid(uuid: string) {
    const url = `${host}/monitor/${uuid}/grabhid`;
    return await axios.post(url);
}

export function GrabHid(uuid: string) {
    const urluuid = uuid.replaceAll('-','');
    mutate(
      (key) => key[0] == '../status',
      () => do_grabhid(urluuid),
      {revalidate: true}
    ); 
}

async function do_selectsource(monitor: string, source: string) {
    const url = `${host}/monitor/${monitor}/select/${source}`;
    return await axios.post(url);
}

export function SelectSource(monitor_uuid: string, source_uuid: string) {
    const monitor_url = monitor_uuid.replaceAll('-','');
    const source_id = source_uuid.replaceAll('-','');
    mutate(
      (key) => key[0].startsWith('../'),
      () => do_selectsource(monitor_url, source_id),
      {revalidate: true}
    ); 
  }