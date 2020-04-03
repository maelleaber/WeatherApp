import React from 'react';
import Home from './components/Home';
import Previsions from './components/Previsions';
import { StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Previsions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});