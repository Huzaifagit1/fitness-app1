import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";
import ImageSlid from "@/components/Imageslider";
import Secondname from "./second";

export default function Home() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
        <StatusBar style="dark" />

        {/* Header */}    
        <View className="flex-row justify-between items-center mx-5">
          <View className="space-y-2">
            <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-700">
              READY TO
            </Text>
            <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-rose-500">
              WORKOUT
            </Text>
          </View>    
          <View className="flex justify-center items-center space-y-2">
            <Image
              source={require("./assets/images/avatar.jpg")}
              style={{ height: hp(8), width: hp(8) }}
              className="rounded-full"
            />
          </View>
        </View>  

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <View>
            <ImageSlid />
          </View>
          <View>
            
            <Secondname />
          </View>
        </ScrollView>

        {/* Floating Gemini Chat Button */}
        <TouchableOpacity
          onPress={() => router.push("/geminichat")}
          style={{
            position: "absolute",
            bottom: hp(2),
            right: wp(5),
            backgroundColor: "white",
            borderRadius: hp(4),
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Image
            source={require("./assets/images/logoAI.webp")}
            style={{ height: hp(7), width: hp(7), borderRadius: hp(4) }}
          />
        </TouchableOpacity>

      </SafeAreaView>
    </GestureHandlerRootView>
  )  
}
