import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



export default function SearchBar(props) {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" size={24} color="black" style={styles.icon}/>
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search" 
        value={props.inputSearch} 
        onChangeText={props.onInputChange} 
        onEndEditing={props.onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE",
        height: 40,
        borderRadius: 5,
        margin: 15,
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        paddingHorizontal: 15,
        alignSelf: "center"
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
    }
});
