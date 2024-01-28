import { StatusBar } from 'expo-status-bar';
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



type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const has_hid: boolean = false;



export default function App() {
  return (
   <MenuProvider>
    <View style={styles.container}>
   <TouchableHighlight
        underlayColor="#ccffff"
        onPress={
            () => { console.log("touched screend") }
        }
    >
    <ImageBackground
        source={require('./assets/monitor-svgrepo-com.png')}
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
           data={sources}
            renderItem={
                ({item}) => <MenuOption value={item.id} text={item.title} />
            }
            keyExtractor={item => item.id}
            style={styles.menuList}
        />
        </MenuOptions>
        </Menu>

    { has_hid && <Image 
              source={require('./assets/keyboard-shortcuts-svgrepo-com.png')} 
              style={styles.keyboardImage}
              resizeMode="contain"
         />

    }
     <Button onPress={ 
       () => { console.log("grabbed hid!"); }
      } title="Grab Hid"  
      disabled={has_hid} 
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  monitorImage: {
    justifyContent: 'center',
    width: 256,
    textAlign: "center"
  },
  keyboardImage: {
    justifyContent: 'center',
    width: 64
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
