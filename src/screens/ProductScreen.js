import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import Swiper from "react-native-swiper";
import ProductArrow from "../icons/ProductArrow";
import ButtonPrimary from "../components/ButtonPrimary";
import BackIcon from "../icons/BackIcon";
import HertIconProduct from "../icons/HeartIconProduct";
import { useNavigation } from "@react-navigation/native";

export default function ProductScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="catalog"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <View style={[styles.container, { paddingBottom: 0 }]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <BackIcon></BackIcon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heart}>
              <HertIconProduct></HertIconProduct>
            </TouchableOpacity>
            <Swiper
              style={{ height: 280 }}
              showsPagination={true}
              dot={
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 24,
                    backgroundColor: "rgba(224, 193, 143, 0.25)",
                    marginHorizontal: 6,
                  }}
                ></View>
              }
              activeDot={
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#E0C18F",
                    borderRadius: 24,
                    marginHorizontal: 6,
                  }}
                ></View>
              }
            >
              <View style={styles.slide}>
                <Image
                  width={96}
                  height={218}
                  style={styles.slideImg}
                  source={require("../../assets/images/product-single.png")}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  width={96}
                  height={218}
                  style={styles.slideImg}
                  source={require("../../assets/images/product-single.png")}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  width={96}
                  height={218}
                  style={styles.slideImg}
                  source={require("../../assets/images/product-single.png")}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  width={96}
                  height={218}
                  style={styles.slideImg}
                  source={require("../../assets/images/product-single.png")}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  width={96}
                  height={218}
                  style={styles.slideImg}
                  source={require("../../assets/images/product-single.png")}
                ></Image>
              </View>
            </Swiper>
          </View>
        </View>
        <View style={styles.content}>
          <View
            style={[styles.container, { paddingTop: 0, paddingBottom: 120 }]}
          >
            <Text style={styles.title}>Avene Physiolift Day Cream</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>378 د.ع</Text>
              <Text style={styles.priceOld}>420 د.ع</Text>
            </View>
            <Text style={styles.smallText}>المادة: 160202</Text>
            <Text style={styles.smallText}>الحجم: 50 مل</Text>
            <View style={styles.block}>
              <TouchableOpacity style={styles.blockHeader}>
                <Text style={styles.blockTitle}>وصف</Text>
                <ProductArrow></ProductArrow>
              </TouchableOpacity>
              <Text style={styles.blockText}>
                كريم مغذي ومرطب عالمي للعناية ببشرة الوجه بعد 25 سنة. يرطب حمض
                الهيالورونيك الطبقات العليا من الجلد بلطف ، وينعم سطحه ، ويقوي
                مركب الإيلاستين والكولاجين ألياف "الهيكل" الداخلي للجلد ، ويحافظ
                على شكل بيضاوي للوجه. الاستخدام المنتظم للكريم يحافظ على البشرة
                ويطيل من نضارتها.
              </Text>
            </View>
            <View style={styles.block}>
              <TouchableOpacity style={styles.blockHeader}>
                <Text style={styles.blockTitle}>طلب</Text>
                <ProductArrow></ProductArrow>
              </TouchableOpacity>
              <Text style={styles.blockText}>
                ضعي طبقة رقيقة على بشرة الوجه التي تم تنظيفها مسبقًا واضربيها
                بأطراف أصابعك برفق حتى تمتصها تمامًا. يوصى باستخدامه يوميًا في
                الصباح والمساء.
              </Text>
            </View>
            <View style={styles.btn}>
              <ButtonPrimary style={styles.btnInner}>
                {/* <View> */}
                <Text>أضف الى الجديد</Text>
                <Text>
                  {"\u00A0"}
                  {"\u00A0"}·{"\u00A0"}
                  {"\u00A0"}
                </Text>
                <Text>378 د.ع</Text>
                {/* </View> */}
              </ButtonPrimary>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    left: 15,
    bottom: 15,
    zIndex: 2,
  },
  back: {
    position: "absolute",
    right: 15,
    top: 20,
    zIndex: 2,
  },
  btn: {
    width: "100%",
    marginTop: 30,
  },
  btnInner: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  blockText: {
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "ShabnamLight",
  },
  blockTitle: {
    color: "#1F2024",
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    marginRight: 14,
  },
  block: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(31, 32, 36, 0.15)",
  },
  blockHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "white",
  },
  smallText: {
    width: "100%",
    fontFamily: "ShabnamLight",
    color: "rgba(31, 32, 36, 0.5)",
    textAlign: "right",
  },
  price: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    color: "#1F2024",
    marginRight: 12,
  },
  priceOld: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    color: "rgba(31, 32, 36, 0.35)",
    textDecorationLine: "line-through",
  },
  prices: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 12,
  },
  title: {
    fontFamily: "CircleBold",
    fontSize: 23,
    lineHeight: 27,
    marginTop: 25,
    marginBottom: 6,
    textAlign: "right",
    width: "100%",
  },
  slideImg: {
    width: 96,
    height: 218,
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    minHeight: "100%",
    backgroundColor: "#F7F7F7",
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
    width: "100%",
  },
});
