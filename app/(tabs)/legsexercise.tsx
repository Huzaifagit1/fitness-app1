import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import FastImage from 'react-native-fast-image'
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';

import React from "react";
export default function LegsExercise() {
    const router = useRouter()
    const legdetails = [
        { id: "leg1", name: "Reverse Hack Squat", image: require("./assets/images/leg1.gif"), description: "A quad-dominant squat variation that also strengthens glutes and hamstrings while reducing lower back strain." },  
        { id: "leg2", name: "Jumping Jack", image: require("./assets/images/leg22.gif"), description: "A dynamic full-body movement that boosts cardiovascular endurance and improves lower body agility." },  
        { id: "leg3", name: "Decline Dumbbell Leg Curl", image: require("./assets/images/leg33.gif"), description: "An effective hamstring isolation exercise that enhances flexibility and lower body strength." },  
        { id: "leg4", name: "Legs Burnout", image: require("./assets/images/leg44.gif"), description: "A high-intensity routine designed to push your endurance and maximize leg muscle activation." },  
        { id: "leg5", name: "Plie Dumbbell Squats", image: require("./assets/images/leg5.gif"), description: "A sumo-style squat that emphasizes the inner thighs, glutes, and quads for sculpted legs." },  
        { id: "leg6", name: "High Knees Against Wall", image: require("./assets/images/leg6.gif"), description: "A powerful cardio move that builds explosive speed, endurance, and lower body coordination." },  
        
      ]
    return (
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>

                <View>
                    <Image source={require('./assets/images/upperLegs.png')}
                        style={{ height: hp(40), width: hp(50) }}
                    />
                    <View className="flex flex-wrap flex-row justify-between p-4">
                       {legdetails.map((exercise, index)=>(
                        <View key={index} className="w-1/2 p2">
<TouchableOpacity onPress={()=>router.push({
    pathname:'/legdetails',
    params:{
        name:exercise.name,
        description: exercise.description,
        image: exercise.id
    }  
})}>
    <Image source={exercise.image} style={{height: hp(18), width:hp(18)}} className="rounded-lg"/>
    
</TouchableOpacity>
<Text className="text-center text-sm font-extrabold text-red-500 tracking-widest shadow-md" >
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