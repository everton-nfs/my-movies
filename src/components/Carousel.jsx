import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
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
    <View style={{ alignItems: 'center', height: 183, display: 'flex', marginTop: 167 }}>
      <FlatList
        ref={FlatlistRef}
        data={props.images}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'center', // Center image vertically
              paddingHorizontal: 25, // Add horizontal spacing
              backgroundColor: '#ffffff00',
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: Dimensions.get('window').width - 50,
                height: '100%',
                alignSelf: 'center',
                borderRadius: 18,
              }}
              resizeMode='cover'
            />
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
              backgroundColor: activeBanner === index ? '#ff0078' : '#ff00787c',
              marginHorizontal: 5, // Adjust spacing
              marginTop: 10,
              marginBottom: 3
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
