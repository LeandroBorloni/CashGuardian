import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Button from './components/button';
import Input from './components/input';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/home.jpg')}></Image>
      <Text>Sistema</Text>
      <Text style={styles.title}>CashGuardian</Text>

      <Input placeholder='e-mail'></Input>
      <Input placeholder='senha' secureTextEntry></Input>

      <Button>Entrar</Button>
      <TouchableOpacity>
        <Text>Criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'#5CAA60',
    fontSize: 34,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
});
