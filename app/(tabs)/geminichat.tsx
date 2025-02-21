import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define message type
type Message = {
  text: string;
  user: boolean;
};

const GeminiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "AIzaSyBf4GSK7T5TnHMCclpMm1Cc8KLef4Zlkbw";

  useEffect(() => {
    showMessage({
      message: "Welcome to Gemini Chat 🤖",
      description: "Ask me anything about Fitness!",
      type: "info",
      icon: "info",
      duration: 2000,
    });
  }, []);
  
  const sendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    
    const newUserMessage: Message = { text: userInput, user: true };     
    setMessages((prev) => [newUserMessage, ...prev]);
    setUserInput("");

    try {  
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Create a short response and ask everything before providing response and always make it short: ${newUserMessage.text}`;
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
      // const result = await model.generateContent(newUserMessage.text);
      const responseText = result.response.text();
      
      const botMessage: Message = { text: responseText, user: false };
      setMessages((prev) => [botMessage, ...prev]);
      // Speech.speak(responseText);
    } catch (error) {
      showMessage({ message: "Error", description: "Failed to fetch response", type: "danger" });
    }
    setLoading(false);
  };  

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage} 
        keyExtractor={(_, index) => index.toString()}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={userInput}
          onChangeText={setUserInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <FontAwesome name="send" size={20} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#101820", paddingTop: 50 },
  messageContainer: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 15,
    maxWidth: "75%",
    alignSelf: "flex-start",
  },
  botMessage: { backgroundColor: "#3A3B3C", alignSelf: "flex-start" },
  userMessage: { backgroundColor: "#1F75FE", alignSelf: "flex-end" },
  messageText: { color: "white", fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#222831",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#393E46",
    color: "white",
    borderRadius: 10,  
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#1F75FE",
    borderRadius: 10,
  },
});

export default GeminiChat;