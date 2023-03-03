import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import InputPrimary from "../components/InputPrimary";

export default function SmsScreen(props) {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const inputs = [firstInput, secondInput, thirdInput, fourthInput];

  function handleChange(index) {
    inputs[index].current.focus();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>ادخل الرمز</Text>
          <Text style={styles.subtitle}>
            تم إرسال رمز مكون من أربعة أرقام إلى الرقم +964751547 7820
          </Text>
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <InputPrimary
                innerRef={firstInput}
                onChangeText={() => handleChange(1)}
                // autoFocus={true}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                innerRef={secondInput}
                onChangeText={() => handleChange(2)}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                innerRef={thirdInput}
                onChangeText={() => handleChange(3)}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={[styles.input, styles.inputLast]}>
              <InputPrimary
                innerRef={fourthInput}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>ارسل الرمز مجددا</Text>
          <View style={styles.bottomBtn}>
            <ButtonPrimary onPress={() => props.navigation.navigate("Welcome")}>
              يكمل
            </ButtonPrimary>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingBottom: 40,
  },
  registerText: {
    fontSize: 20,
  },
  main: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    fontFamily: "ShabnamBold",
    marginBottom: 12,
    color: "#1F2024",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#71727A",
    fontFamily: "ShabnamLight",
    maxWidth: 220,
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 56,
    marginRight: 8,
  },
  inputLast: {
    marginRight: 0,
  },
  bottomText: {
    fontFamily: "ShabnamLight",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: "#1F2024",
    textAlign: "center",
  },
  bottomBtn: {
    width: "100%",
  },
  bottom: {
    width: "100%",
  },
});
