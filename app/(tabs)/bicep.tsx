import { View , Text, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import FastImage from 'react-native-fast-image'
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';  // Import the router


export default function BicepExercise (){
    const router = useRouter()
    const bicepdetails = [
      { id: "bicep1", name: "Biceps Curls", image: require("./assets/images/bicep1.gif"), description: "A fundamental biceps builder that enhances arm strength, size, and definition." },  
      { id: "bicep2", name: "Close Grip Z-Bar Curl", image: require("./assets/images/bicep2.gif"), description: "A variation that places extra tension on the inner biceps for peak development." },  
      { id: "bicep3", name: "Preacher Curl", image: require("./assets/images/bicep3.gif"), description: "An isolation exercise that eliminates momentum, focusing solely on biceps growth." },  
      { id: "bicep4", name: "Incline Hammer Curl", image: require("./assets/images/bicep4.gif"), description: "A powerful move that builds arm thickness while emphasizing the brachialis muscle." },  
      { id: "bicep5", name: "Scott Curls", image: require("./assets/images/bicep5.gif"), description: "A strict curl variation that enhances muscle control and improves biceps peak." },  
      { id: "bicep6", name: "Cable Preacher Curl", image: require("./assets/images/bicep6.gif"), description: "Provides constant tension on the biceps for maximum pump and growth." },  
      
    ]
    return(  
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
    <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>

        <View>
            <Image source={require('./assets/images/slide4.png')} style={{height:hp(40), width: hp(50)}}/>
        <View className="flex flex-wrap flex-row justify-between p-4">
          {bicepdetails.map((exercise, index)=>(  
            <View key={index} className="w-1/2 p-2" >
              <TouchableOpacity onPress={()=> router.push({
              pathname:'/bicepdetails',
              params:{
                name:exercise.name,
                description: exercise.description, 
                image: exercise.id
              }
              })}>
                <Image source={exercise.image} className="rounded-lg" style={{height:hp(18), width: hp(18)}}/>

              </TouchableOpacity>
              <Text className="text-center text-sm font-extrabold text-red-500 tracking-widest shadow-md">
              ✦ {exercise.name} ✦
              </Text></View>
          ))}
        </View>
            
        </View>
        </ScrollView>
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
    )
}