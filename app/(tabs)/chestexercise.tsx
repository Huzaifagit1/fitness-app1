import { View, Text,TouchableOpacity,ScrollView  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FastImage from 'react-native-fast-image'
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';  // Import the router

import React from "react";
export default function ChestExercise(){
    const router = useRouter()
    const chestdetails = [
        { id: "chest1", name: "Peck Deck Fly", image: require("./assets/images/chest1.gif"), description: "A powerful isolation exercise that sculpts the chest by maximizing muscle contraction and definition." },  
        { id: "chest2", name: "Lever Chest Press", image: require("./assets/images/chest2.gif"), description: "A machine-based press that builds strength and mass in the chest while maintaining stability and control." },  
        { id: "chest3", name: "Dumbbell Butterfly", image: require("./assets/images/chest3.gif"), description: "A deep-stretching movement that enhances chest expansion, muscle symmetry, and definition." },  
        { id: "chest4", name: "Bench Press", image: require("./assets/images/chest4.gif"), description: "The king of chest exercises, building raw power, strength, and size for a well-defined upper body." },  
        { id: "chest5", name: "Dumbbell Bench Press", image: require("./assets/images/chest5.gif"), description: "A free-weight press that improves muscle control, balance, and overall chest development." },  
        { id: "chest6", name: "Dumbbell Pullover", image: require("./assets/images/chest6.gif"), description: "A multi-purpose movement that stretches and strengthens the chest while engaging the lats." },  
        
    ]    
    return(
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>

        <View>
 
 <Image
              source={require("./assets/images/chest.png")}
              style={{ height: hp(40), width: hp(50) }}
              className="rounded-xl shadow-lg" 
   />
      <View className="flex flex-wrap flex-row justify-between p-4">
                    {chestdetails.map((exercise, index) => (
                        <View key={index} className="w-1/2 p-2">  
                            <TouchableOpacity 
                                onPress={() => router.push({
                                    pathname: "/chestdetails",
                                    params: {
                                        name: exercise.name,
                                        description: exercise.description,
                                        image: exercise.id
                                    }
                                })}
                            >
                                <Image 
                                    source={exercise.image}  
                                    style={{ height: hp(18), width: hp(18) }}
                                    className="rounded-lg"
                                />
                            </TouchableOpacity>
                            <Text className="text-center text-sm font-extrabold text-red-500 tracking-widest shadow-md">
                                ✦ {exercise.name} ✦
                            </Text>
                        </View>
                    ))}
                </View>
            
        </View>                </ScrollView>
        <TouchableOpacity
                onPress={() => router.push("/geminichat")}
                style={{
                    position: "absolute",
                    bottom: hp(1),
                    right: wp(2),  
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