import { View, ImageBackground, Image } from 'react-native';
import Header from '../components/Header';

export default function MoviePoster({ poster, children, title }) {
  return (
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
  );
}