import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Location from 'expo-location';

import AccelerometerComponent from '../components/AccelerometerComponent';
import GyroComponent from '../components/GyroComponent';
import GPSComponent from '../components/GPSComponent';
var data = []

export default function TabOneScreen() {
  const [gps_location, setLocation] = useState(null);
  const [gyro_data, setGyroData] = useState({});
  const [acceleration, setAcceleration] = useState({});

  setInterval(() => {
    data.push({ "gps": gps_location, "gyro": gyro_data, "acceleration": acceleration, "time": new Date() })
  }, 100)


  function save(){
    console.log(data)
    console.log("save")
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