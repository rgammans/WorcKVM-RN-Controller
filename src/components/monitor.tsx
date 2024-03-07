import { HidCtrl  } from './hid_ctrl';
import { VideoCtrl  } from './video_ctrl';

import { StyleSheet, View } from 'react-native';

type MonitorProps = {
    uuid: string;
};

const sources = [ 
    {
        id: 1,
        title: 'Gaming Pc'
    },
    {
        id: 2,
        title: 'Linux Pc'
    },
    {
        id: 3,
        title: 'Mac'
    },
    {
        id: 21,
        title: 'Gaming Pc'
    },
    {
        id: 22,
        title: 'Linux Pc'
    },
    {
        id: 23,
        title: 'Mac'
    }
]


export function Monitor(props: MonitorProps) {
  console.log(props.uuid);
  return (
    <View>
      <VideoCtrl sources={sources} />
      <HidCtrl has_hid={false} />
    </View>
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
