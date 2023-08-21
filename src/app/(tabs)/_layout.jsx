// import { Slot } from "expo-router";

// import "../../../global.css";

// export default function () {
//   return <Slot />;
// }

import { Tabs } from "expo-router";


export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
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