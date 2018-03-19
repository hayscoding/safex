import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

//Automatically set to 'production' when published through Expo
var env = process.env.NODE_ENV || 'development';
// var env = 'production'
var config = require('./config')[env];

const firebaseConfig = {
   apiKey: config.database.firebaseApiKey,
   authDomain: config.database.firebaseAuthDomain,
   databaseURL: config.database.databaseURL,
 } 

firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50,}}>Safex</Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Verify Sexual Consent Before Anything Happens.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9afff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});