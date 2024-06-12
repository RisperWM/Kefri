import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Events from "../screens/Events";
import Support from "../screens/Support";
import ScientificPrograms from "../screens/ScientificPrograms";
import Exhibition from "../screens/Exhibition";

const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Congress"
      screenOptions={{
        drawerStyle: {
          width: 190,
        },
      }}
    >
      <Drawer.Screen
        name="Congress"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Scientific Program"
        component={ScientificPrograms}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Event"
        component={Events}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Exhibition"
        component={Exhibition}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="More"
        component={Support}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default Navigator;
