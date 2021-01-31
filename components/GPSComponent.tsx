import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useLinkProps } from '@react-navigation/native';

export default function GPSComponent(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const location = props.location;
  const setLocation = props.setLocation;


  useEffect(() => {

    //todo this might waste too much battery or might be fine
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

