import { View,TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Octicons } from "@expo/vector-icons";

export default function SearchBar() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
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
  )
}