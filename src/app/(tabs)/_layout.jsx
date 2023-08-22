// import { Slot } from "expo-router";

// import "../../../global.css";

// export default function () {
//   return <Slot />;
// }

// backgroundColor: '#ffffff00',

import { Tabs } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Text, View, ImageBackground, Dimensions } from 'react-native';
import { Entypo, Octicons, FontAwesome } from '@expo/vector-icons';


export default function TabRoutesLayout() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        elevation: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#181c42',
        borderStyle: "solid",
        borderWidth: 2,
        paddingTop: 14,
        borderColor: "#181c42"
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, backgroundColor: focused ? "#252b56" : "#181c42"}}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <Entypo name="home" size={22} color={`${focused ? "#ff0078" : "#555b87"}`} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, backgroundColor: focused ? "#252b56" : "#181c42"}}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <Octicons name="search" size={22} color={`${focused ? "#ff0078" : "#555b87"}`} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, backgroundColor: focused ? "#252b56" : "#181c42"}}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <FontAwesome name="user" size={22} color={`${focused ? "#ff0078" : "#555b87"}`} />
              </View>
            </View>
          ),
        }}
      />

    </Tabs>
  );
}