import { StatusBar } from 'expo-status-bar';
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


const hashid: boolean = true;

export default function App() {
  return (
    <View style={styles.container}>
    <TouchableHighlight
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
     { true && 
        <FlatList
            data={sources}
            renderItem={
                ({item}) => <Item title={item.title} />
            }
            keyExtractor={item => item.id}
            style={styles.menuList}
        />
    }

    </ImageBackground>  
    </TouchableHighlight>
    { hashid && <Image 
              source={require('./assets/keyboard-shortcuts-svgrepo-com.png')} 
              style={styles.keyboardImage}
              resizeMode="contain"
         />

    }
     <Button onPress={ 
       () => { console.log("grabbed hid!"); }
      } title="Grab Hid"  
      disabled={hashid} 
        />
      <StatusBar style="auto" />
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
   marginVertical: 50,
   fontSize: 20,
   textAlign: "center"
  },
  menuList: {
    height: 150
  },
});
