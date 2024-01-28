import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    FlatList,
} from 'react-native';

import { MenuTrigger, MenuProvider, Menu, MenuOptions, MenuOption } from '@radiet/react-native-popup-menu';

type Source = {
    id: string;
    title: string;
};
type VideoCtrlProps = {
    sources: Source[];
};

export function VideoCtrl(props: VideoCtrlProps) {
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
    <Text style={styles.currentSource}>Current PC</Text>
    </ImageBackground>
    </TouchableHighlight>

    <Menu onSelect={
                (x) => console.log(x)
    }>

    <MenuTrigger text="click" />
        <MenuOptions>
        <FlatList
           data={props.sources}
            renderItem={
                ({item}) => <MenuOption value={item.id} text={item.title} />
            }
            keyExtractor={item => item.id}
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
