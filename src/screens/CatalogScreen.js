import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import SearchButton from "../components/SearchButton";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    name: "ميك أب",
    img: require("../../assets/images/cat-1.png"),
  },
  {
    name: "العناية بالوجه",
    img: require("../../assets/images/cat-2.png"),
  },
  {
    name: "العناية بالجسم",
    img: require("../../assets/images/cat-3.png"),
  },
  {
    name: "للشعر",
    img: require("../../assets/images/cat-4.png"),
  },
  {
    name: "للرجال",
    img: require("../../assets/images/cat-5.png"),
  },
  {
    name: "للأطفال",
    img: require("../../assets/images/cat-6.png"),
  },
  {
    name: "العناية بالجسم",
    img: require("../../assets/images/cat-1.png"),
  },
  {
    name: "ميك أب",
    img: require("../../assets/images/cat-2.png"),
  },
];

export default function CatalogScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="catalog"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.search}>
            <SearchButton
              onPress={() => navigation.navigate("Search")}
            ></SearchButton>
          </View>
          <Text style={styles.catalogTitle}>فهرس</Text>
          <View style={styles.catalogItems}>
            {categories.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Category")}
                style={[
                  styles.catlaogItem,
                  { marginRight: index % 2 == 1 ? 0 : 10 },
                ]}
                key={index}
              >
                <ImageBackground
                  style={styles.catalogItemBg}
                  resizeMode="cover"
                  source={item.img}
                >
                  <Text style={styles.catalogItemText}>{item.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  catalogItemBg: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  catalogItems: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  catalogItemText: {
    fontSize: 16,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    marginBottom: 15,
  },
  catlaogItem: {
    width: 150,
    height: 160,
    borderRadius: 15,
    marginBottom: 10,
  },
  catalogTitle: {
    color: "#1F2024",
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    marginBottom: 20,
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
  search: {
    width: "100%",
    marginBottom: 20,
  },
});
