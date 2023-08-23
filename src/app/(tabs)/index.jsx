import { Text, View, ImageBackground, Dimensions, Image } from "react-native";
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
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const images = [
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

  return (
    <ImageBackground
      className="bg-blue-100"
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

      <View className="flex-row items-center mx-[25] rounded-full px-[17px] h-11 bg-blue-75 mb-6">
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

      <Carousel images={images} />

    </ImageBackground>
  );
}
