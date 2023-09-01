import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';


export default function Categories({ selectedGender, setSelectedGender, moviesCategories }) {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
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
            >{item.name}</Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
}
