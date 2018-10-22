import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer'
import reducer from './reducer'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

let store = createStore(reducer);

console.log(store.getState())

export default class App extends React.Component {
  render() {
    return (
      // Provider는 자동으로 state를 복사
      <Provider store={store}>
        <Timer />
      </Provider>
      
      //<Timer />
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
