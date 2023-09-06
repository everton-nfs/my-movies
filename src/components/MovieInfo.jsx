import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Genre from '../components/Genre';
import { Ionicons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';
import { extractYearFromDate } from '../utils/extractYearFromDate';

export default function MovieInfo({ genreId, voteAverage, releaseDate }) {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View className="flex flex-row justify-center mt-5">
        <View className="flex-row flex justify-center items-center px-3 border-r border-blue-50">
          <Ionicons name="ios-calendar" size={17} color="#555b87" />
          <Text
            className="text-blue-50 text-sm pt-[3px] pl-1"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {extractYearFromDate(releaseDate)}
          </Text>
        </View>
        <View className="flex-row flex justify-center items-center px-3 border-r border-blue-50">
          <MaterialIcons name="movie" size={20} color="#555b87" />
          <Text
            className="text-blue-50 text-sm pt-[3px] pl-1"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            <Genre genreId={genreId} />
          </Text>
        </View>
        <View className="flex-row flex justify-center items-center px-3 ">
          <Octicons name="star-fill" size={15} color="#ebbf2a" />
          <Text
            className="text-white text-sm pt-[1px] pl-1"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {voteAverage}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => alert("O filme não está mais disponível!")}
        className="flex justify-center items-center mt-5"
      >
        <View className="flex flex-row justify-center items-center bg-yellow-100 rounded-full h-[53px] w-[128px]">
          <Entypo name="controller-play" size={22} color="#ffffff" />
          <Text
            className="text-white text-base pl-2"
            style={{ fontFamily: "Poppins_600SemiBold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Play
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}