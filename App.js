import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer'

export default class App extends React.Component {
  render() {
    return (
      <Timer />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
