import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Link } from "expo-router";

export default function Header({ title, email, user, goBack }) {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className={`flex-row items-center mt-12 px-[25px] mb-8 h-[55px] ${user ? "gap-x-3" : ""}`}>
      {user && (
        <Image
          source={require("../assets/everton.jpeg")}
          className="w-11 h-11 border rounded-full"
          resizeMode="cover"
        />
      )}
      {goBack && (
        <Link href={goBack} asChild>
          <TouchableOpacity className="w-[10%]">
            <View className="rounded-full bg-blue-75 w-8 h-8 flex justify-center items-center">
              <Entypo name="chevron-left" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </Link>
      )}
      <View className="flex-col w-[90%] justify-center pr-8">
        <Text
          className={`text-lg leading-[10px] pt-5 text-white ${user ? "" : "flex self-center"}`}
          style={{ fontFamily: "Poppins_600SemiBold" }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        {user && (
          <Text
            className="text-blue-50"
            style={{ fontFamily: "Poppins_500Medium" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {email}
          </Text>
        )}
      </View>
    </View>
  )
}