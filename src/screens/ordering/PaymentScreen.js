import theme from "../../theme";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import BackIcon from "../../icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import RadioPrimary from "../../components/RadioPrimary";
import ProductImage from "../../../assets/images/product.png";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("online");
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>يأمر</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.progressLine}>
            <View style={styles.progressLineActive}></View>
          </View>
          <View style={styles.steps}>
            <TouchableOpacity style={styles.step}>
              <Text style={[styles.stepText, styles.stepTextActive]}>قسط</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step}>
              <Text style={styles.stepText}>توصيل</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step}>
              <Text style={styles.stepText}>متلقي</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitlePrimary}>اختر طريقة الدفع</Text>
          <View style={[styles.radio, { marginBottom: 15 }]}>
            <RadioPrimary
              title="عن طريق البطاقة المصرفية ، عبر الإنترنت"
              titleSize={16}
              text="ادفع مقابل طلبك في غضون 30 دقيقة بعد ذلك
              التصميم."
              active={paymentMethod == "online"}
              onPress={() => setPaymentMethod("online")}
            ></RadioPrimary>
          </View>
          <View style={[styles.radio, { marginBottom: 50 }]}>
            <RadioPrimary
              title="الدفع عند الاستلام"
              titleSize={16}
              text="يمكنك دفع ثمن الطلب نقدًا إلى شركة الشحن."
              active={paymentMethod == "cash"}
              onPress={() => setPaymentMethod("cash")}
            ></RadioPrimary>
          </View>
          <Text style={styles.subtitlePrimary}>تحقق من تفاصيل الطلب:</Text>
          <View style={[styles.orderInfo, { marginBottom: 50 }]}>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>متلقي</Text>
              <Text style={styles.orderInfoText}>مريم عبد</Text>
              <Text style={styles.orderInfoText}>+964 751 547 7820</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                Mariam.Abdel@gmail.com
              </Text>
            </View>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>طريقة التوصيل</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                تسليم البريد السريع
              </Text>
            </View>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>عنوان التسليم</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                طريق الطيران ، منطقة مناوي باشا ، البصرة
              </Text>
            </View>
            <View style={[styles.orderInfoBlock, styles.orderInfoBlockLast]}>
              <Text style={styles.orderInfoTitle}>قسط</Text>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  2
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  العناصر لكل طلب
                </Text>
              </View>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  678 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  مبلغ الشراء
                </Text>
              </View>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  250 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  توصيل
                </Text>
              </View>
              <View style={[styles.orderInfoRow, styles.orderInfoRowLast]}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  928 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  مجموع
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.subtitlePrimary}>بضائع</Text>
          {[1, 1, 1, 1, 1].map((item, index) => (
            <View style={styles.product} key={index}>
              <View style={styles.productLeft}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productName}>
                    Serie Expert{"\n"}Vitamino Color
                  </Text>
                  <Text style={styles.productSubtitle}>جيل الإستحمام</Text>
                </View>
                <View style={styles.productPrices}>
                  <Text style={styles.productPrice}>378 د.ع</Text>
                  <Text style={styles.productPriceOld}>420 د.ع</Text>
                </View>
              </View>
              <View style={styles.productRight}>
                <Image
                  source={ProductImage}
                  style={styles.productImage}
                  width={50}
                ></Image>
              </View>
            </View>
          ))}
          <View style={styles.btn}>
            <ButtonPrimary onPress={() => navigation.navigate("Success")}>
              الدفع
            </ButtonPrimary>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    marginTop: 40,
  },
  productImage: {
    width: 50,
    height: 130,
  },
  productLeft: {
    marginRight: 25,
    height: "100%",
  },
  productPrices: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  productPriceOld: {
    fontSize: 18,
    lineHeight: 22,
    color: "rgba(31, 32, 36, 0.35)",
    textDecorationLine: "line-through",
    fontFamily: "Shabnam",
  },
  productPrice: {
    fontSize: 18,
    lineHeight: 22,
    color: "#1F2024",
    marginRight: 8,
    fontFamily: "Shabnam",
  },
  productSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: "#8F9098",
    fontFamily: "ShabnamLight",
  },
  productName: {
    fontFamily: "Circle",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "right",
    color: "#1F2024",
  },
  product: {
    paddingRight: 40,
    paddingBottom: 18,
    paddingTop: 18,
    paddingLeft: 20,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    borderRadius: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  radio: {
    width: "100%",
  },
  step: {
    width: "33%",
    display: "flex",
    alignItems: "center",
  },
  subtitlePrimary: {
    fontFamily: theme.fontBold,
    fontSize: 22,
    lineHeight: 30,
    color: theme.colorDark,
    marginBottom: 20,
  },
  steps: {
    marginTop: 26,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 36,
  },
  stepTextActive: {
    fontFamily: theme.fontBold,
    color: theme.colorDark,
  },
  stepText: {
    fontFamily: theme.fontLight,
    color: "#8F9098",
    fontSize: 16,
    lineHeight: 22,
  },
  progressLine: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 100,
    display: "flex",
    alignItems: "flex-end",
  },
  progressLineActive: {
    backgroundColor: "#E0C18F",
    height: 4,
    borderRadius: 100,
    width: "100%",
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },

  scroll: {
    minHeight: "100%",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
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
    paddingBottom: 40,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  orderInfoRowLast: {
    marginBottom: 0,
  },
  orderInfoRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orderInfoBlockLast: {
    marginBottom: 0,
  },
  orderInfoBlock: {
    marginBottom: 26,
  },
  orderInfoTitle: {
    fontFamily: "ShabnamBold",
    fontSize: 18,
    lineHeight: 25,
    color: "#1F2024",
    marginBottom: 7,
  },
  orderInfoText: {
    color: "#71727A",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "ShabnamLight",
    marginBottom: 7,
    textAlign: "right",
  },
  orderInfoTextLast: {
    marginBottom: 0,
  },
  orderInfo: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 28,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
  },
});
