import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { ImageSliderType } from "@/constants/data";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: ImageSliderType;
  index: number;
};

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = wp(80); 
const ITEM_MARGIN = wp(5); 
  
const SliderItem = ({ item, index }: Props) => {
  return (
    <View style={[styles.itemContainer, { width: ITEM_WIDTH, marginHorizontal: ITEM_MARGIN }]}>
      <Image source={item.image} style={styles.image} />
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.overlay}>
        <View>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 20,
    overflow: "hidden", // Ensures rounded corners apply properly
  },
  image: {
    height: hp(30),
    width: "100%",
    borderRadius: 20,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "34%", 
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf:'center'
  },
  textDescription: {
    color: "#f2f3f4",
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    textShadowColor: '#00FFFF', 
    textAlign:'center',
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 5, 
},

});
