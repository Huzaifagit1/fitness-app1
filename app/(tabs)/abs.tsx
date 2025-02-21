import { View , Text, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import FastImage from 'react-native-fast-image'
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';  // Import the router

export default function Abs (){
    const router = useRouter()
    const exercises = [
        { id: "abs1", name: "Alternate Heel Touch", image: require("./assets/images/abs1.gif"), description: "Great for targeting obliques and core stability." },
        { id: "abs2", name: "Crunch", image: require("./assets/images/abs2.gif"), description: "Classic abs exercise to build core strength." },
        { id: "abs3", name: "Russian Twist", image: require("./assets/images/abs3.gif"), description: "Helps with rotational core strength." },
        { id: "abs4", name: "Pull Up", image: require("./assets/images/abs4.gif"), description: "Upper body exercise engaging core muscles." },
        { id: "abs5", name: "Peck Deck Fly", image: require("./assets/images/abs5.gif"), description: "Targets chest muscles with controlled movement." },
        { id: "abs6", name: "V-Up", image: require("./assets/images/abs6.gif"), description: "Engages the entire core for explosive movement." },
    ];
   
    return(
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>
            <View>
                <Image 
                    source={require('./assets/images/slide3.png')} 
                    style={{ height: hp(40), width: hp(50) }} 
                />

                <View className="flex flex-wrap flex-row justify-between p-4">
                    {exercises.map((exercise, index) => (
                        <View key={index} className="w-1/2 p-2">
                            <TouchableOpacity 
                                onPress={() => router.push({
                                    pathname: "/exercises",
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
            </View>
        </ScrollView>
    </SafeAreaView>
   )  
}