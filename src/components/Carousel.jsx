import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, ImageBackground, Dimensions, Text } from 'react-native';
import Animated, { Layout, FadeInLeft, FadeOutRight } from 'react-native-reanimated';

const Carousel = (props) => {
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
      const nextBannerIndex = (activeBanner + 1) % props.images.length;
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
        data={props.images}
        renderItem={({ item }) => (

          <View
            style={{
              justifyContent: "center",
              paddingHorizontal: 25,
            }}
          >
            <ImageBackground
              source={{
                uri: item.image,
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
                  {item.launchDate}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={props.images}
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
