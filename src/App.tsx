import { StatusBar } from 'expo-status-bar';
import { HidCtrl  } from './components/hid_ctrl';
import { VideoCtrl  } from './components/video_ctrl';

import { MenuTrigger, MenuProvider, Menu, MenuOptions, MenuOption } from '@radiet/react-native-popup-menu';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
    TouchableHighlight,
    FlatList,
} from 'react-native';

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


const has_hid: boolean = false;


export default function App() {
  return (
   <MenuProvider>
    <View style={styles.container}>
      <VideoCtrl sources={sources} />
      <HidCtrl has_hid={false} />
      <StatusBar style="auto" />
    </View>
   </MenuProvider>
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
