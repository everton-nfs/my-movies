import { Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Genre from './Genre';
import { Link } from 'expo-router';

export default function MoviesSearch({ movies }) {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  const moviesGroups = [];
  const itemsPerGroup = 4;

  for (let i = 0; i < movies.length; i += itemsPerGroup) {
    moviesGroups.push(movies.slice(i, i + itemsPerGroup));
  }

  return (
    <View>
      {
        moviesGroups.map((group, groupIndex) => (
          <ScrollView
            key={groupIndex}
            className="pb-3"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 25 }}
          >
            {group.map((item, index) => (
              <Link
                href={`/movie/${item.id}`}
                key={item.id}
                asChild
              >
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 145,
                    height: 250,
                    flex: 1,
                    marginHorizontal: 6,
                    borderRadius: 10,
                    marginLeft: index === 0 ? 0 : 6,
                    marginRight: index === movies.length - 1 ? 0 : 6,
                    overflow: "hidden",
                    backgroundColor: "#252b56"
                  }}
                >
                  <ImageBackground
                    style={{
                      width: "100%",
                      height: "100%",
                      flex: 1,
                      marginTop: -20
                    }}
                    source={{
                      uri: `https://www.themoviedb.org/t/p/original/${item.poster_path}`,
                    }}
                    resizeMode='cover'
                  >
                    <View className="flex self-end flex-row items-center justify-center m-2 mt-[28px] w-[60px] h-[25px] rounded-lg bg-black-50">
                      <Octicons name="star-fill" size={15} color="#ebbf2a" />
                      <Text
                        className="pl-[5px] pt-[2px] text-white"
                        style={{ fontFamily: "Poppins_500Medium" }}
                      >
                        {item.vote_average.toFixed(1)}
                      </Text>
                    </View>
                  </ImageBackground>
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
                      <Genre genreId={item.genre_ids[0]} />
                    </Text>
                  </View>


                </TouchableOpacity>
              </Link>
            ))}
          </ScrollView>
        ))
      }

    </View>
  )
}