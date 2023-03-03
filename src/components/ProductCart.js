import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import TrashIcon from "../icons/TrashIcon";
import ProductPlus from "../icons/ProductPlus";
import ProductMinus from "../icons/ProductMinus";

export default function ProductCart(props) {
  return (
    <View style={styles.product}>
      <TouchableOpacity style={styles.productTrash}>
        <TrashIcon></TrashIcon>
      </TouchableOpacity>
      <View style={styles.productLeft}>
        <Text style={styles.productTitle}>
          Serie Expert{"\n"}
          Vitamino Color
        </Text>
        <Text style={styles.productSubtitle}>جيل الإستحمام</Text>
        <View style={styles.productBtm}>
          <Text style={styles.productPrice}>228 د.ع</Text>
          <View style={styles.productNav}>
            <TouchableOpacity>
              <ProductPlus></ProductPlus>
            </TouchableOpacity>
            <Text style={styles.productCount}>1</Text>
            <TouchableOpacity>
              <ProductMinus></ProductMinus>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productRight}>
        <Image
          style={{ width: 57, height: 122 }}
          source={require("../../assets/images/product-cart.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productTrash: {
    position: "absolute",
    left: 15,
    top: 15,
  },
  product: {
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    borderRadius: 15,
    paddingRight: 30,
    paddingBottom: 18,
    paddingTop: 15,
    marginBottom: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 18,
    marginRight: 20,
  },
  productCount: {
    fontFamily: "Circle",
    fontSize: 18,
    color: "#1F2024",
    marginLeft: 15,
    marginRight: 15,
  },
  productLeft: {
    flexGrow: 1,
    marginRight: 28,
    display: "flex",
    alignItems: "flex-end",
  },
  productTitle: {
    textAlign: "right",
    fontSize: 18,
    lineHeight: 21,
    fontFamily: "Circle",
  },
  productSubtitle: {
    fontFamily: "ShabnamLight",
    color: "#8F9098",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
  productNav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productBtm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
