import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
  

import { Image } from "expo-image";
export default function BackExercise(){
    const router = useRouter();
    const backdetails = [
      { id: "back1", name: "Barbell Chest Supported Row", image: require("./assets/images/back1.gif"), description: "A controlled rowing movement that isolates the upper back, minimizing momentum for maximum muscle engagement." },  
{ id: "back2", name: "Pull-Up", image: require("./assets/images/back6.gif"), description: "A true test of upper body strength—sculpt your lats, traps, and biceps with this bodyweight staple." },  
{ id: "back3", name: "Landmine Row", image: require("./assets/images/back3.gif"), description: "An explosive back-builder that enhances pulling power while engaging your core and stabilizers." },  
{ id: "back4", name: "Delt Raise", image: require("./assets/images/back4.gif"), description: "A shoulder-shaping movement that strengthens the rear delts, improving posture and upper body aesthetics." },  
{ id: "back5", name: "Cable Row", image: require("./assets/images/back5.gif"), description: "A machine-based pull that delivers deep muscle contraction, building thickness in the lats and mid-back." },  
{ id: "back6", name: "Seal Row", image: require("./assets/images/back2.gif"), description: "A strict, momentum-free row that maximizes back isolation for pure muscle growth." },  

    ]
    return(
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>

        <View>

<Image source={require('./assets/images/back.png')}
              style={{ height: hp(40), width: hp(50) }}

/>
<View className="flex flex-wrap flex-row justify-between p-4">
  {backdetails.map((exercise, index)=>(

    <View key={index} className="w-1/2 p-2">
      <TouchableOpacity onPress={()=> router.push({
        pathname:'/backdetails',
        params:{
          name: exercise.name,
          description: exercise.description,
          image: exercise.id
        }
      })}>
        <Image source={exercise.image}
        style={{height: hp(18), width:hp(18)}}
        className="rounded-lg"/>

      </TouchableOpacity>
      <Text className="text-center text-sm font-extrabold text-red-500 tracking-widest shadow-md">
      ✦ {exercise.name} ✦
      </Text> </View>
  ))}  
</View>
           
        </View>
        
        </ScrollView>
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