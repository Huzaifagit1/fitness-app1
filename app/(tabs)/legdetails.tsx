import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Image mapping to dynamically resolve images
const imageMap: Record<string, any> = {
    leg1: require("./assets/images/leg1.gif"),
    leg2: require("./assets/images/leg22.gif"),
    leg3: require("./assets/images/leg33.gif"),
    leg4: require("./assets/images/leg44.gif"),
    leg5: require("./assets/images/leg5.gif"),
    leg6: require("./assets/images/leg6.gif"),   
};  
    
export default function ExerciseDetails() {
    const router = useRouter()
    const params = useLocalSearchParams();
    console.log("Received params:", params); 

    const { name, description, image } = params as { name?: string; description?: string; image?: string };

    
    const resolvedImage = image && imageMap[image] ? imageMap[image] : require("./assets/images/slide1.png");

    return (
        <SafeAreaView className="flex-1 bg-gray-100 p-5">
    <View className="items-center bg-white p-5 rounded-2xl shadow-lg">
    <Text 
            style={{ 
                fontSize: hp(2.5), 
                textShadowColor: 'rgba(0, 0, 0, 0.4)', 
                textShadowOffset: { width: 1, height: 2 }, 
                textShadowRadius: 3,
                marginBottom:hp(3)
            }} 
            className="font-extrabold mt-5 text-gray-900 tracking-wide">
            {name || "Exercise Name"}
        </Text>    <Image 
            source={resolvedImage} 
            style={{ height: hp(55), width: hp(45) }} 
            className="rounded-2xl shadow-md border-2 border-gray-300"
        />
     <Text className="text-lg text-gray-600 mt-2 text-center leading-relaxed px-3">
            {description || "No description available."}
        </Text>
    </View>
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
    );
}
