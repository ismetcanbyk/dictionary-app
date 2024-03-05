import { Text, View } from 'react-native';
import styles from './Styles';
import Word from './components/Word';
import AddWord from './components/AddWord';

export default function App() {
  return (
    <View style={styles.container}>
      <Word original="Hello" translation="Bonjour" />
      <AddWord />
    </View>
  );
}


