import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import InputPrimary from "../components/InputPrimary";
import ButtonPrimary from "../components/ButtonPrimary";

export default function RegisterScreen(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.registerContainer}>
        <View style={styles.main}>
          <Text style={styles.registerTitle}>تحقق في</Text>
          <Text style={styles.registerSubtitle}>
            أدخل رقم الهاتف الذي سيتم إرسال رمز التأكيد
          </Text>
          <View style={styles.input}>
            <InputPrimary
              keyboardType="phone-pad"
              textAlign="center"
              placeholder="رقم الهاتف"
              backgroundColor={"#F2F2F4"}
            ></InputPrimary>
          </View>
          <View style={styles.button}>
            <ButtonPrimary
              onPress={() => {
                props.navigation.navigate("Sms");
              }}
            >
              اختر وسيلة الدفع
            </ButtonPrimary>
          </View>
        </View>
        <Text style={styles.bottomText}>
          بالضغط على الزر ، أنت توافق لمعالجة بياناتي الشخصية
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    height: "100%",
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
  input: {
    marginBottom: 15,
    width: "100%",
  },
  button: {
    width: "100%",
  },
  main: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  registerTitle: {
    fontSize: 24,
    lineHeight: 33,
    color: "#1F2024",
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "ShabnamBold",
  },
  registerSubtitle: {
    color: "#71727A",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "ShabnamLight",
  },
  bottomText: {
    textAlign: "center",
    color: "#8F9098",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "ShabnamLight",
    maxWidth: 271,
  },
});
