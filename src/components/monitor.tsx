import { HidCtrl  } from './hid_ctrl';
import { VideoCtrl  } from './video_ctrl';

import { StyleSheet, View } from 'react-native';
import { useAvailableSources, useHidStatus } from '../services/monitor_status';

type MonitorProps = {
    uuid: string;
};


export function Monitor(props: MonitorProps) {
  console.log(props.uuid);
  const { data: sources,  error: src_error} = useAvailableSources(props.uuid);
  const { data: status,  error: hid_error} = useHidStatus(props.uuid);
  console.log('srcs',sources);
  console.log('status', status);
  return (
    <>
      <VideoCtrl uuid={props.uuid} sources={sources} />
      <HidCtrl uuid={props.uuid} has_hid={status?.has_hid} />
    </>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
