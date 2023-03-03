import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import ProfileTab from "./src/tabs/ProfileTab";
import RegisterTab from "./src/tabs/RegisterTab";
import CatalogTab from "./src/tabs/CatalogTab";
import CartTab from "./src/tabs/CartTab";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Shabnam: require("./assets/fonts/Shabnam.ttf"),
    ShabnamBold: require("./assets/fonts/Shabnam-Bold.ttf"),
    ShabnamLight: require("./assets/fonts/Shabnam-Light.ttf"),
    CircleExtraBold: require("./assets/fonts/Circe-ExtraBold.ttf"),
    Circle: require("./assets/fonts/Circe-Regular.ttf"),
    CircleBold: require("./assets/fonts/Circe-Bold.ttf"),
  });

  const [initialScreen, setInitialScreen] = useState("RegisterTab");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto"></StatusBar>
      <SafeAreaView>
        <View onLayout={onLayoutRootView} style={styles.container}>
          <NavigationContainer theme={{ colors: { background: "white" } }}>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
              }}
              initialRouteName={initialScreen}
              backBehavior="none"
            >
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="Home"
                component={HomeScreen}
              ></Tab.Screen>
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="ProfileTab"
                component={ProfileTab}
              ></Tab.Screen>
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="CartTab"
                component={CartTab}
              ></Tab.Screen>
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="CatalogTab"
                component={CatalogTab}
              ></Tab.Screen>
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="Favorite"
                component={FavoriteScreen}
              ></Tab.Screen>
              <Tab.Screen
                options={{ tabBarStyle: { display: "none" } }}
                name="RegisterTab"
                component={RegisterTab}
              ></Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scroll: {
    display: "flex",
    backgroundColor: "#fff",
    height: "100%",
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});

// second commit
