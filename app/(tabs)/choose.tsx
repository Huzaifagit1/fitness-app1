import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";

export default function Choose() {
    const router = useRouter();    

    return (
        <View style={{ padding: wp(5), alignItems: "center" }}>
            
            <Text style={{ fontSize: wp(7), fontWeight: "bold", color: "#FFD700", marginBottom: hp(3) }}>
                BASED ON GOALS 
            </Text>

            {/* Lose Weight */}  
            <View style={{ width: wp(90), height: hp(10), position: "relative", marginBottom: hp(4), overflow: "visible", marginTop: hp(4) }}>
                <TouchableOpacity
                    onPress={() => router.push("/home")}
                    style={{
                        backgroundColor: "white",
                        paddingVertical: hp(3.5),
                        paddingHorizontal: wp(5),
                        borderRadius: 15,
                        elevation: 5,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Gym Workout</Text>
                </TouchableOpacity>

                <Image
                    source={require("./assets/images/gym.webp")}
                    style={{
                        height: hp(18),
                        width: hp(20),

                        position: "absolute",
                        right: wp(0),
                        top: -hp(8),
                        resizeMode: "contain",
                    }}
                />
            </View>


            <View style={{ width: wp(90), height: hp(10), position: "relative", marginBottom: hp(4), overflow: "visible",marginTop: hp(4) }}>
                <TouchableOpacity
                    onPress={() => router.push("/homeworkout")}
                    style={{
                        backgroundColor: "white",
                        paddingVertical: hp(3.5),
                        paddingHorizontal: wp(5),
                        borderRadius: 15,
                        elevation: 5,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Home Workout </Text>
                </TouchableOpacity>

                <Image
                    source={require("./assets/images/homework.jpg")}
                    style={{
                        height: hp(20),
                        width: hp(20),

                        position: "absolute",
                        right: wp(0),
                        top: -hp(8),
                        resizeMode: "contain",
                    }}
                />
            </View>
            <View style={{ width: wp(90), height: hp(10), position: "relative", marginBottom: hp(4), overflow: "visible", marginTop: hp(4) }}>
                <TouchableOpacity
                    onPress={() => router.push("/gemini")}
                    style={{
                        backgroundColor: "white",
                        paddingVertical: hp(3.5),
                        paddingHorizontal: wp(5),
                        borderRadius: 15,
                        elevation: 5,
                        flexDirection: "row",
                        alignItems: "center",  
                    }}
                >
                    <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Ask Gemini </Text>
                </TouchableOpacity>

                <Image
                    source={require("./assets/images/gemini3.webp")}
                    style={{
                        height: hp(20),
                        width: hp(20),

                        position: "absolute",
                        right: wp(0),
                        top: -hp(8),
                        resizeMode: "contain",
                    }}
                />
            </View>
            <View style={{ width: wp(90), height: hp(10), position: "relative", marginBottom: hp(4), overflow: "visible", marginTop: hp(4) }}>
                <TouchableOpacity  
                    onPress={() => router.push("/recovery")}
                    style={{
                        backgroundColor: "white",
                        paddingVertical: hp(3.5),  
                        paddingHorizontal: wp(5),  
                        borderRadius: 15,
                        elevation: 5,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Mediation </Text>
                </TouchableOpacity>                

                <Image
                    source={require("./assets/images/recovery.jpg")}  
                    style={{
                        height: hp(20),
                        width: hp(20),

                        position: "absolute",
                        right: wp(0),
                        top: -hp(8),
                        resizeMode: "contain",
                    }}
                />
            </View>
        </View>
    );
}
