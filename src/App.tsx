import { StatusBar } from 'expo-status-bar';
import { Monitor } from './components/monitor';
import { useMonitors } from './services/monitors';

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

const has_hid: boolean = false;


export default function App() {
  const { data, error } = useMonitors();
  console.log(data);
  return (
   <MenuProvider>
    <View style={styles.container}>
        <FlatList data={data}
            renderItem={ ({item, index, separators}) => (
                <Monitor uuid={item.uuid} />
            )}
        />
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
