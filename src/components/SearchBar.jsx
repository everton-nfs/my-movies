import React, { useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Octicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";

export default function SearchBar({text, value, onChangeText, button, placeholder}) {
  const navigation = useNavigation();
  const inputRef = useRef(null);
  const [fontsLoaded] = useFonts({ Poppins_500Medium });

  useEffect(() => {
    const focusOnHandleAreas = navigation.addListener("focus", () => {
      if (inputRef.current && text) {
        console.log("carregou e focou!")
        inputRef.current.focus();
      }
    });
    return focusOnHandleAreas;
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {text && (
        <View className="flex-row items-center mx-[25px] rounded-full px-[17px] h-11 bg-blue-75 mb-6">
          <Octicons className="mx-4" name="search" size={17} color="#555b87" />
          <TextInput
            ref={inputRef}
            className="flex-1 px-3 items-center pt-[2px]"
            color="#ffffff"
            cursorColor="#555b87"
            placeholderTextColor="#555b87"
            placeholder={placeholder}
            style={{ fontFamily: "Poppins_500Medium" }}
            editable={true}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      )}

      {button && (
        <Link href="/search" asChild>
          <TouchableOpacity className="flex-row items-center mx-[25px] rounded-full px-[17px] h-11 bg-blue-75 mb-6">
            <Octicons className="mx-4" name="search" size={17} color="#555b87" />
            <Text
              className="flex-1 px-3 items-center pt-[2px] text-blue-50"
              style={{ fontFamily: "Poppins_500Medium" }}
            >{placeholder}</Text>
          </TouchableOpacity>
        </Link>
      )}
    </>
  )
}
