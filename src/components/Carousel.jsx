import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, ImageBackground, Dimensions, Text, TouchableOpacity } from 'react-native';
import Animated, { Layout, FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import { extractYearFromDate } from '../utils/extractYearFromDate';
import { Link } from 'expo-router';

const Carousel = ({ movies }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  const FlatlistRef = useRef(null);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      const nextBannerIndex = (activeBanner + 1) % movies.length;
      FlatlistRef.current?.scrollToIndex({
        index: nextBannerIndex,
        animated: true,
      });
      setActiveBanner(nextBannerIndex);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);

  return (
    <View style={{ alignItems: 'center', height: 190, display: 'flex' }}>
      <FlatList
        ref={FlatlistRef}
        data={movies}
        renderItem={({ item }) => (
          <Link
            href={`/movie/${item.id}`}
            asChild
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                paddingHorizontal: 25,
              }}
            >
              <ImageBackground
                source={{
                  uri: `https://www.themoviedb.org/t/p/original/${item.backdrop_path}`,
                }}
                style={{
                  width: Dimensions.get("window").width - 50,
                  height: "100%",
                  alignSelf: "center",
                  borderRadius: 18,
                  overflow: "hidden",
                  position: "relative",
                }}
                resizeMode="cover"
              >
                <View className="flex-1 justify-end h-full px-4 pb-3 bg-black-75 w-full">
                  <Text
                    className="text-lg leading-[22px] text-white"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    className="text-white"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                  >
                    {extractYearFromDate(item.release_date)}
                  </Text>
                </View>
              </ImageBackground>


            </TouchableOpacity>
          </Link>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={movies}
        renderItem={({ index }) => (
          <Animated.View
            layout={Layout}
            entering={FadeInLeft}
            exiting={FadeOutRight}
            style={{
              width: activeBanner === index ? 24 : 9,
              height: 9,
              borderRadius: 4,
              backgroundColor: activeBanner === index ? '#ff0078' : '#880f5d',
              marginHorizontal: 5, // Adjust spacing
              marginTop: 14,
              marginBottom: 4
            }}
          />
        )}
        style={{
          alignSelf: 'center',
        }}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default Carousel;
