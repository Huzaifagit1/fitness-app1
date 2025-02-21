import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ImageSlider } from "@/constants/data";
import SliderItem from "./SliderItem";
export default function ImageSlid() {
    return (
        <View>
            
            <FlatList data={ImageSlider} renderItem={({ item, index }) => <SliderItem item={item} index={index}  /> } horizontal showsHorizontalScrollIndicator={false} pagingEnabled/>
            
        </View>
    );
};   
  