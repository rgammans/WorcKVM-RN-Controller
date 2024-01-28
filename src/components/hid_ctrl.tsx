import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    Button,
} from 'react-native';


type HidCtrlProps = {
    has_hid: boolean;
};

export function HidCtrl(props: HidCtrlProps) {
    return ( <View>
    { props.has_hid && <Image 
              source={require('../../assets/keyboard-shortcuts-svgrepo-com.png')} 
              style={styles.keyboardImage}
              resizeMode="contain"
         />

    }
    { !props.has_hid && <Button onPress={ 
       () => { console.log("grabbed hid!"); }
      } title="Grab Hid"  
      disabled={props.has_hid} 
        />
    }
    </View>
    );
}

const styles = StyleSheet.create({
  keyboardImage: {
    justifyContent: 'center',
    width: 64
  },

});
