import { View, Text } from "react-native";
import React from "react";

import GeminiChat from "./geminichat";
import { StyleSheet } from "react-native";

import FlashMessage from "react-native-flash-message";
export default function Gemini (){
    return(
        <View style={styles.container}>
        <GeminiChat />
        <FlashMessage position={"top"} />
      </View>
    )
} 
const styles = StyleSheet.create({
    container: {  
      flex: 1,
    },
  });    