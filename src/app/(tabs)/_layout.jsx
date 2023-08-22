// import { Slot } from "expo-router";

// import "../../../global.css";

// export default function () {
//   return <Slot />;
// }

// backgroundColor: '#ffffff00',

import { Tabs } from "expo-router";


export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      // tabBarStyle: {
      //   position: 'absolute',
      //   borderTopLeftRadius: 12,
      //   borderTopRightRadius: 12,
      //   backgroundColor: 'transparent',
      // },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil"
        }}
      />
    </Tabs>
  );
}