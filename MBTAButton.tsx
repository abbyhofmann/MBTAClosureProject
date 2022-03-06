import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ButtonProps {
    firstStop: string
  }
  
  export function MBTAButton(props: ButtonProps) {
    return  (
    <View style={styles.container3}>
    <View style={styles.container2}>
    <Text style={styles.blackText}>{props.firstStop}</Text>
    <StatusBar style="auto" />
    </View>
    </View>)
  }
  
  const styles = StyleSheet.create({
    whiteText: {
      color: 'white',
      alignItems: 'center',
    },
    blackText: {
      color: 'black',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#628EFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      borderRadius: 25,
      backgroundColor: '#fff',
      padding: 20,
      width: 200, 
      height: 150,
      },
    container3: {
      borderRadius: 25,
      backgroundColor: '#57D5FD',
      padding: 10,
      width: 220,
      height: 170,
    },
  });
  