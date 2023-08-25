import { Text, View, ImageBackground, SafeAreaView, TouchableHighlight, Dimensions, Image, ScrollView } from "react-native";
import React, { useState } from 'react';
import Carousel from "../../components/Carousel";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Octicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export default function Home() {

  const [selectedGender, setSelectedGender] = useState(1);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const featuredMovies = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      title: "Super Mario Bros. O Filme",
      launchDate: "04/05/2023"
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      title: "Velozes e Furiosos 10",
      launchDate: "05/18/2023"
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/original/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
      title: "Homem-Aranha: Através do Aranhaverso",
      launchDate: "06/01/2023"
    },
  ];

  const popularFilms = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/original/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
      title: "Elementos",
      gender: "Animação"
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      title: "Transformers: O Despertar das Feras",
      gender: "Ação"
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/original/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
      title: "Agente Stone",
      gender: "Mistério"
    },
    {
      id: 4,
      image:
        "https://www.themoviedb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      title: "The Flash",
      gender: "Ação"
    },
    {
      id: 5,
      image:
        "https://www.themoviedb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      title: "Barbie",
      gender: "Comédia"
    },
  ];

  const moviesCategories = [
    {
      id: 1,
      title: "Todos"
    },
    {
      id: 2,
      title: "Comédia"
    },
    {
      id: 3,
      title: "Animação"
    },
    {
      id: 4,
      title: "Documentário"
    }
  ]

  return (


    <ImageBackground
      className="bg-blue-100 flex-1"
      //source={require("../../assets/home-model.png")}
      style={{ width: "100%", height: Dimensions.get("screen").height }}
      resizeMode="cover"
    >
      <View className="flex-row items-center mt-12 gap-x-3 px-[25px] mb-8">
        <Image
          source={require("../../assets/everton.jpeg")}
          className="w-11 h-11 border rounded-full"
          resizeMode="cover"
        />
        <View className="flex-col w-[80%] justify-center">
          <Text
            className="text-lg leading-[10px] pt-5 text-white"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Olá Everton!
          </Text>
          <Text
            className="text-blue-50"
            style={{ fontFamily: "Poppins_500Medium" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            evertonnfs2@gmail.com
          </Text>
        </View>
      </View>

      <View className="flex-row items-center mx-[25px] rounded-full px-[17px] h-11 bg-blue-75 mb-6">
        <Octicons className="mx-4" name="search" size={17} color="#555b87" />
        <TextInput
          className="flex-1 px-3 items-center pt-[2px]"
          color="#ffffff"
          cursorColor="#555b87"
          placeholderTextColor="#555b87"
          placeholder="Pesquise pelo título..."
          style={{ fontFamily: "Poppins_500Medium" }}
        />
      </View>

      <ScrollView
        className="mb-[20%]"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Carousel images={featuredMovies} />

        <View className="mt-5">
          <Text
            className="text-lg text-white mx-[25px]"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Categorias
          </Text>

          <ScrollView
            className="mt-[18px]"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 25 }}
          >
            {moviesCategories.map((item, index) => (
              <TouchableHighlight
                key={item.id}
                underlayColor="#252b56"
                onPress={() => setSelectedGender(item.id)}
                style={{
                  minWidth: 85,
                  height: 32,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 6,
                  borderRadius: 8,
                  marginLeft: index === 0 ? 0 : 6,
                  marginRight: index === moviesCategories.length - 1 ? 0 : 6,
                  overflow: "hidden",
                  backgroundColor: selectedGender === item.id ? '#252b56' : '#181c42'
                }}
              >
                <Text
                  className={`py-[6px] px-[12px] ${selectedGender === item.id ? 'text-pink-100' : 'text-white'}`}
                  style={{ fontFamily: "Poppins_500Medium" }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >{item.title}</Text>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>

        <View className="mt-[29px]">
          <Text
            className="text-lg text-white mx-[25px]"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Mais popular
          </Text>
          <ScrollView
            className="pb-6 pt-4"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 25 }}
          >
            {popularFilms.map((item, index) => (
              <View
                key={index}
                style={{
                  width: 145,
                  height: 250,
                  flex: 1,
                  marginHorizontal: 6,
                  borderRadius: 10,
                  marginLeft: index === 0 ? 0 : 6,
                  marginRight: index === popularFilms.length - 1 ? 0 : 6,
                  overflow: "hidden",
                  backgroundColor: "#252b56"
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
                <View className="px-[10px] pb-3">
                  <Text
                    className="text-[14.8px] leading-[10px] pt-5 text-white"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                  <Text
                    className="text-blue-50 text-xs"
                    style={{ fontFamily: "Poppins_500Medium" }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.gender}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>



      </ScrollView>



    </ImageBackground>
  );
}
