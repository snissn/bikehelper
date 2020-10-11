import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Location from 'expo-location';

import AccelerometerComponent from '../components/AccelerometerComponent';
import GyroComponent from '../components/GyroComponent';
import GPSComponent from '../components/GPSComponent';

export default function TabOneScreen() {
  return (
<>
    <AccelerometerComponent />
    <GyroComponent />
    <GPSComponent />
    </>
  )
}



