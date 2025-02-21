import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from 'expo-router';  // Import the router



export default function Secondname() {
    const router = useRouter()
 
  return (
    <View className="flex flex-wrap flex-row justify-between p-4">
      {/* Image 1 */}
       
      <View className="w-1/2 p-2">
        
      <TouchableOpacity onPress={() => router.push('/chestexercise')}><Image 
              source={require("./assets/images/chest.png")}  
              style={{ height: hp(18), width: hp(18) }}
              className="rounded-lg"  
            /></TouchableOpacity>
      
        <Text className="color-red-600 text-center text-m font-medium">Chest  </Text>
      </View>
      
      {/* Image 2 */}
      <View className="w-1/2 p-2">
      
      <TouchableOpacity onPress={() => router.push('/backexercise')}> <Image
              source={require("./assets/images/back.png")}
              style={{ height: hp(18), width: hp(18) }}
              className="rounded-lg"  
            /></TouchableOpacity>
        <Text className="color-red-600 text-center text-m font-medium">Back  </Text>
      </View>
      
      {/* Image 3 */}
      <View className="w-1/2 p-2">
      <TouchableOpacity onPress={() => router.push('/shoulderexercise')}> <Image
              source={require("./assets/images/slide1.png")}
              style={{ height: hp(18), width: hp(18) }}
              className="rounded-lg"  
            /></TouchableOpacity>
        <Text className="color-red-600 text-center text-m font-medium">Shoulders  </Text>
      </View>
      
      {/* Image 4 */}
      <View className="w-1/2 p-2">
      <TouchableOpacity onPress={() => router.push('/legsexercise')}><Image
              source={require("./assets/images/upperLegs.png")}
              style={{ height: hp(18), width: hp(18) }}
              className=""  
            /></TouchableOpacity>
        <Text className="color-red-600 text-center text-m font-medium">Legs  </Text>
      </View>
      <View className="w-1/2 p-2">
      <TouchableOpacity onPress={() => router.push('/bicep')}><Image
              source={require("./assets/images/bicep.jpg")}
              style={{ height: hp(18), width: hp(18) }}
              className="rounded-lg"  
            /></TouchableOpacity>
        <Text className="color-red-600 text-center text-m font-medium">Biceps </Text>
      </View>
      <View className="w-1/2 p-2">
      <TouchableOpacity onPress={() => router.push('/abs')}> <Image
              source={require("./assets/images/slide3.png")}
              style={{ height: hp(18), width: hp(18) }}
              className="rounded-lg cursor-pointer"  
            /></TouchableOpacity>
        <Text className="color-red-600 text-center text-m font-medium">ABS </Text>
      </View>
    </View>
  );
}
