import { Text, View, ImageBackground, Dimensions } from 'react-native';
import Carousel from '../../components/Carousel';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from '@expo/vector-icons';

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
      image:
        'https://www.themoviedb.org/t/p/original/wr4JPcbiAllTLqP0cZsvdIfbtay.jpg',
    },
    {
      image:
        'https://www.themoviedb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
    },
    {
      image:
        'https://www.themoviedb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg'
    }
    // Add more images as needed
  ];

  return (
    <ImageBackground
      className="bg-blue-100"
      //source={require("../../assets/home-model.png")}
      style={{ width: "100%", height: Dimensions.get("window").height }}
      resizeMode="cover"
      
    >
      <Carousel images={images} />

    </ImageBackground>
  );
}
