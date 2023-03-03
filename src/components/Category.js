import { ScrollView, View, Text, StyleSheet } from "react-native";
import Product from "./Product";

export default function Category(props) {
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.topLeft}>اظهار الكل</Text>
        <Text style={styles.topRight}>{props.name}</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.product}>
          <Product></Product>
        </View>
        <View style={styles.product}>
          <Product></Product>
        </View>
        <View style={styles.product}>
          <Product></Product>
        </View>
        <View style={styles.product}>
          <Product></Product>
        </View>
        <View style={styles.product}>
          <Product></Product>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    width: 180,
    height: "auto",
    marginRight: 15,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
  },
  topLeft: {
    color: "rgba(113, 114, 122, 0.5)",
    fontFamily: "Shabnam",
    fontSize: 16,
    lineHeight: 22,
  },
  topRight: {
    fontFamily: "ShabnamBold",
    fontSize: 22,
    lineHeight: 30,
    color: "#2F3036",
  },
});
