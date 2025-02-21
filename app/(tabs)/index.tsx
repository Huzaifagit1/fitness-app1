import { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
  
export default function App() {
  const router = useRouter();  
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const correctEmail1 = "huzi@gmail.com";
  const correctEmail2 = "hubi@gmail.com";
  const correctEmail3 = "mehwish@gmail.com";
  const correctPassword = "hubihuzi";
  const handleLogin = () => {
    if (email === correctEmail1 || correctEmail2 || correctEmail3 && password === correctPassword  ) {
      setModalVisible(false);  
      router.push("/choose");
    } else {        
      alert("Invalid Credentials");    
    }  
  };  
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <StatusBar style="light" />
        <Image className="w-full h-full absolute" source={require("./assets/images/welcome2.jpg")} />
        <LinearGradient
          colors={["transparent", "#18181b"]}
          style={{ width: wp(100), height: hp(100) }}
          start={{ x: 0.5, y: 0 }}  
          end={{ x: 0.5, y: 0.8 }}
          className="flex justify-end pb-12 space-y-8"
        >
          <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
            <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
              Best <Text className="text-rose-500">Workout</Text>
            </Text>
            <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(3) }}>For You</Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).springify()}>    
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ height: hp(5), width: wp(50) }}
              className="bg-red-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 m-5"
            >
              <Text className="text-white font-bold tracking-widest" style={{ fontSize: hp(3) }}>
                Start Now
              </Text>      
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>

      {/* Modal for login */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View className="flex-1 justify-center items-center bg-black/50">
        <View style={{ width: wp(80), backgroundColor: 'gray' }} className="p-6 rounded-lg border border-yellow-400">
        <Text className="text-xl font-bold text-center mb-4">Login</Text>
            <TextInput  
              className="border border-gray-300 rounded p-2 mb-2"  
              placeholder="Email"
              value={email}  
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              className="border border-gray-300 rounded p-2 mb-4"  
              placeholder="Password"    
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity className="bg-blue-500 p-2 rounded mb-2" onPress={handleLogin}>
              <Text className="text-white text-center cursor-pointer">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded border border-gray-300" onPress={() => setModalVisible(false)}>
              <Text className="text-center text-red">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
}
  