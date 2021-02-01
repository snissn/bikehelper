import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import * as firebase from 'firebase';
import uuid from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBi668PS6C67_0y9u-O9EpQUlVXPhqNqtw",
  authDomain: "bikehelper-25f36.firebaseapp.com",
  databaseURL: "https://bikehelper-25f36.firebaseio.com",
  projectId: "bikehelper-25f36",
  storageBucket: "bikehelper-25f36.appspot.com",
  messagingSenderId: "807128174231",
  appId: "1:807128174231:web:abbde02c3bf973494ce3d2",
  measurementId: "G-29DXR443PK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



import * as Location from 'expo-location';

import AccelerometerComponent from '../components/AccelerometerComponent';
import GyroComponent from '../components/GyroComponent';
import GPSComponent from '../components/GPSComponent';
var data = []

export default function TabOneScreen() {
  const [gps_location, setLocation] = useState(null);
  const [gyro_data, setGyroData] = useState({});
  const [acceleration, setAcceleration] = useState({});
useEffect(function(){

  setInterval(() => {

    data.push({ "gps": gps_location, "gyro": gyro_data, "acceleration": acceleration, "time": new Date() })
  }, 100)

},[gps_location, gyro_data, acceleration])


async function save(){
    console.log("save")
    const ref = firebase.storage().ref().child(uuid.v4());
    const json_data = JSON.stringify(data);
    const snapshot = await ref.putString(json_data)
  }


  return (
    <>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={save} style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <AccelerometerComponent data={acceleration} setData={setAcceleration} />
      <GyroComponent data={gyro_data} setData={setGyroData} />
      <GPSComponent location={gps_location} setLocation={setLocation} />
    </>
  )
}



const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  }
})
