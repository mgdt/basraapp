import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCart from "../icons/ProductCart";
import ProductImage1 from "../../assets/images/product-1.png";
import ProductHeart from "../icons/ProductHeart";

export default function Product(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product")}
      style={styles.product}
    >
      <ProductHeart
        onPress={() => console.log("Heart press")}
        style={styles.productHeart}
        opacity={props.favorite ? 1 : 0.8}
        fill={props.favorite ? "#1F2024" : "transparent"}
      ></ProductHeart>
      <View style={styles.discount}>
        <Text style={styles.discountText}>30%</Text>
      </View>
      <Image style={styles.productImg} source={ProductImage1}></Image>
      <Text style={styles.productTitle}>
        Total Results Unbreak{"\n"}My Blonde
      </Text>
      <View style={styles.productBtm}>
        <ProductCart onPress={() => console.log("Cart press")}></ProductCart>
        <View style={styles.productsBtmRight}>
          <Text style={styles.productPrice}>378 د.ع</Text>
          <Text style={styles.productPriceOld}>420 د.ع</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productHeart: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  discountText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Circle",
  },
  discount: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#E0C18F",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productImg: {
    width: 36,
    height: 119,
  },
  productPriceOld: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 15,
    color: "rgba(31, 32, 36, 0.35)",
    marginLeft: 6,
    textDecorationLine: "line-through",
  },
  productPrice: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 15,
  },
  productsBtmRight: {
    display: "flex",
    flexDirection: "row",
  },
  productBtm: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    display: "flex",
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  productTitle: {
    fontFamily: "Circle",
    textAlign: "right",
    fontSize: 13,
    lineHeight: 16,
    color: "rgba(31, 32, 36, 0.8)",
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
});
