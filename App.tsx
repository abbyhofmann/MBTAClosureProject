import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MBTAButton } from './MBTAButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MBTAButton firstStop={`Heath Street\n|\n|\nV\nNortheastern`}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#628EFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});