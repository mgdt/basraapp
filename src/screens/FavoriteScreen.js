import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import BackIcon from "../icons/BackIcon";
import SearchIconCategory from "../icons/SearchIconCategory";
import { useNavigation } from "@react-navigation/native";
import Product from "../components/Product";

export default function FavoriteScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="favorite"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <SearchIconCategory></SearchIconCategory>
            </TouchableOpacity>
            <View>
              <Text style={styles.categoryTitle}>العناية ببشرة الوجه</Text>
            </View>
            <TouchableOpacity style={{ opacity: 0 }}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.products}>
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <View
                style={[
                  styles.product,
                  { marginRight: index % 2 == 1 ? 0 : 10 },
                ]}
                key={index}
              >
                <Product favorite={true}></Product>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  product: {
    maxWidth: 160,
    marginBottom: 10,
  },
  categorySubtitle: {
    color: "rgba(31, 32, 36, 0.5)",
    fontSize: 15,
    lineHeight: 19,
    fontFamily: "Shabnam",
  },
  categoryTitle: {
    fontSize: 22,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    textAlign: "center",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: 50,
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
    paddingTop: 15,
    paddingBottom: 106,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
