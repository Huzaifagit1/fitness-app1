import { View, Text , ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function ShoulderExercise(){
    const router = useRouter()
    const shoulderdetails = [
      { id: "shoulder1", name: "Barbell Military Press", image: require("./assets/images/shoulder1.gif"), description: "A powerful compound movement that builds overall shoulder mass and strength." },  
{ id: "shoulder2", name: "Seated Barbell Overhead Press", image: require("./assets/images/shoulder22.gif"), description: "A strict pressing exercise that enhances deltoid development while providing better stability." },  
{ id: "shoulder3", name: "Barbell Front Raise", image: require("./assets/images/shoulder3.gif"), description: "An isolation movement that strengthens the front delts for a more defined look." },  
{ id: "shoulder4", name: "Dumbbell Wide Grip Upright Row", image: require("./assets/images/shoulder4.jpg"), description: "Targets the side delts and traps, helping to create broader shoulders." },  
{ id: "shoulder5", name: "Dumbbell Standing Palms Press", image: require("./assets/images/shoulder5.gif"), description: "A unique variation that engages the shoulders while reducing wrist strain." },  
{ id: "shoulder6", name: "Grit Elite Gear Shoulder Press", image: require("./assets/images/shoulder6.gif"), description: "A dynamic pressing movement that builds explosive shoulder power and stability." },  

    ]
    return(
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>

        <View>
            <Image source={require("./assets/images/shoulders.png")}
            style={{height: hp(40), width: hp(50)}}
            />  

        <View className="flex flex-wrap flex-row justify-between p-4">
          {shoulderdetails.map((exercise, index)=>(
<View key={index} className="w-1/2 p-2" >

  <TouchableOpacity onPress={()=> router.push({
    pathname:'/shoulderdetails',
    params:{
      name: exercise.name,
      description: exercise.description, 
      image: exercise.id
    }
  
  })}>
    <Image source={exercise.image} style={{height:hp(18), width:hp(18)}} className="rounded-lg"/>
  </TouchableOpacity>
<Text className="text-center text-sm font-extrabold text-red-500 tracking-widest shadow-md">
  {exercise.name}
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