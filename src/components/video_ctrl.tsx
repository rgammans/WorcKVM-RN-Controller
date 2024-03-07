import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    FlatList,
} from 'react-native';

import { MenuTrigger, MenuProvider, Menu, MenuOptions, MenuOption } from '@radiet/react-native-popup-menu';
import { useHidStatus, SelectSource } from '../services/monitor_status';

type Source = {
    uuid: string;
    name: string;
};
type VideoCtrlProps = {
    uuid: string;
    sources: Source[];
};

export function VideoCtrl(props: VideoCtrlProps) {
    const { data: status,  error: hid_error} = useHidStatus(props.uuid);
    return (
    <>
   <TouchableHighlight
        underlayColor="#ccffff"
        onPress={
            () => { console.log("touched screend") }
        }
    >
    <ImageBackground
        source={require('../../assets/monitor-svgrepo-com.png')}
        resizeMode="contain"
        style={styles.monitorImage}
   >
    <Text style={styles.currentSource}>{status.source?.name}</Text>
    </ImageBackground>
    </TouchableHighlight>

    <Menu onSelect={
        (source_uuid) => {
            console.log(source_uuid);
            SelectSource(props.uuid, source_uuid); 
        }
    }>

    <MenuTrigger text="click" />
        <MenuOptions>
        <FlatList
           data={props.sources}
            renderItem={
                ({item}) => <MenuOption value={item.uuid} text={item.name} />
            }
            keyExtractor={item => item.uuid}
            style={styles.menuList}
        />
        </MenuOptions>
    </Menu>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monitorImage: {
    justifyContent: 'center',
    width: 256,
    textAlign: "center"
  },
  currentSource: {
   padding: 20,
   marginVertical: 50,
   fontSize: 20,
   textAlign: "center"
  },
  menuList: {
    height: 150
  },
});
