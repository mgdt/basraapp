import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import SearchButton from "../components/SearchButton";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useEffect, useRef } from "react";

export default function HomeScreen(props) {
  const navigation = useNavigation();
  const video = useRef(null);

  useEffect(() => {
    video.current.playAsync();
  }, []);

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="home"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/images/video.mp4")}
          resizeMode="cover"
          isMuted={true}
          isLooping={true}
        ></Video>
        <View style={styles.container}>
          <View style={styles.search}>
            <SearchButton
              onPress={() =>
                navigation.navigate("CatalogTab", { screen: "Search" })
              }
            ></SearchButton>
          </View>
          <View style={styles.category}>
            <Category name="المخزون"></Category>
          </View>
          <View style={styles.category}>
            <Category name="الأكثر مبيعًا"></Category>
          </View>
          <View style={styles.category}>
            <Category name="جديد"></Category>
          </View>
          <View style={styles.category}>
            <Category name="المخزون"></Category>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    height: 300,
    width: "100%",
  },
  category: {
    width: "100%",
    marginBottom: 25,
  },
  search: {
    width: "100%",
    marginBottom: 25,
    marginTop: -45,
  },
  scroll: {
    minHeight: "100%",
  },
  navBtm: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 30,
    zIndex: 2,
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 106,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
