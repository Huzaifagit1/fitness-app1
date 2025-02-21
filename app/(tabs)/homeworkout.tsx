import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from "react";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Homeworkout() {
    const router = useRouter();

    const homeExercises = [
        { id: "home1", image: require("./assets/images/home1.gif") },
  
        { id: "home4", image: require("./assets/images/home4.gif") },
        { id: "home5", image: require("./assets/images/home5.gif") },  
        { id: "home6", image: require("./assets/images/home6.gif") },
        { id: "home7", image: require("./assets/images/home7.gif") },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-100 space-y-5">
            <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>
                <View className="items-center p-4">
                    <Image
                        source={require("./assets/images/homep.jpg")}
                        style={{ height: hp(40), width: hp(50) }}
                        className="rounded-xl shadow-lg border border-gray-300"
                    />
                </View>

                {/* Grid Layout for Exercise Images */}
                <View className="flex flex-wrap flex-row justify-center px-4">
                    {homeExercises.map((exercise, index) => (
                        <View key={index} className="w-1/2 p-2">
                            <Image
                                source={exercise.image}
                                style={{ height: hp(25), width: "100%" }}
                                className="rounded-lg border border-gray-300 shadow-lg"
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Floating AI Chat Button */}
            <TouchableOpacity
                onPress={() => router.push("/geminichat")}
                className="absolute bottom-5 right-5 bg-white p-2 rounded-full shadow-lg"
                style={{ elevation: 5 }}
            >
                <Image
                    source={require("./assets/images/logoAI.webp")}
                    style={{ height: hp(7), width: hp(7), borderRadius: hp(4) }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
