import { Text, View, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function UserProfile() {
  
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-row items-center mt-12 gap-x-3 px-[25px] mb-8">
      <Image
        source={require("../assets/everton.jpeg")}
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
  );
}
