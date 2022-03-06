import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextField from '@mui/material/TextField'; 
import { useState } from 'react';


export const FirstPage = () => {
    
  const [fromInput, changeFromInput] = useState("");
  const handleFromChange = (event : any) => {
    console.log(event);
    changeFromInput(event.target.value);
  }
  return (
    <View style={styles.container} >
      
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 } }>Where do you want to go?</Text> 
      <br></br>
      <View style = {searchBarOutline.rectangle}>
      <View style={searchBar.rectangle}>
        {/* <Text style={{ color: 'gray', textAlign: 'left'}}>From... </Text> */}
        <TextField id="standard-basic" placeholder="From..." variant="standard" onChange={handleFromChange}/>

      </View>
      </View>
      <br></br>
      <View style = {searchBarOutline.rectangle}>
      <View style={searchBar.rectangle}>
        {/* <Text style={{ color: 'gray', textAlign: 'left'}}>To... </Text> */}
        <TextField id="standard-basic" placeholder="To..." variant="standard" onChange={handleFromChange}/>

      </View>
      </View>

      <StatusBar style="auto" />
      
    
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
  
  const searchBar = StyleSheet.create({
    rectangle: {
      height: 40,
      width: 300,
      backgroundColor: 'white',
      position: 'relative', 
      alignItems: 'center',
      borderRadius: 25,
      justifyContent: 'center',
    },
  }); 
  
  const searchBarOutline = StyleSheet.create({ 
    rectangle: {
      height: 50,
      width: 325,
      backgroundColor: '#57D5FD',
      position: 'relative', 
      alignItems: 'center',
      borderRadius: 25,
      justifyContent: 'center',
    },
  });