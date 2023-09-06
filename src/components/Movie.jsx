import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './Header';

export default function Movie({ poster, children, title, overview }) {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ImageBackground
        className="h-[565px] w-full"
        source={{
          uri: `https://www.themoviedb.org/t/p/original/${poster}`,
        }}
        resizeMode="cover"
      >
        <ImageBackground
          className="w-full h-full"
          source={require("../assets/gradientBlue.png")}
          resizeMode="cover"
        >
          <Header title={title} goBack="/home" />
          <View className="h-[310px] w-[220px] flex self-center -mt-5 rounded-[10px] overflow-hidden shadow-2xl">
            <Image
              className="h-full w-full"
              source={{
                uri: `https://www.themoviedb.org/t/p/original/${poster}`,
              }}
            />
          </View>
          {children}
        </ImageBackground>
      </ImageBackground>
      <ScrollView>
        <View className="mx-[25px] pb-5">
          <Text
            className="text-white text-lg pt-[3px] pl-1 pb-[5px]"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            {title}
          </Text>
          <Text
            className="text-white text-sm pt-[3px] pl-1 leading-[20px]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {overview}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}