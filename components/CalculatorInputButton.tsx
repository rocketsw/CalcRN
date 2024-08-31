//import { ACTIONS } from "../constants/Actions"
import { Pressable, StyleSheet, Text, ViewStyle, StyleProp  } from "react-native";
import { styles } from "../styles";

type ButtonStyle = StyleProp<ViewStyle>;
  
const digitButtonStyle: ButtonStyle = StyleSheet.flatten([styles.button, styles.digitButton]);
const opButtonStyle: ButtonStyle = StyleSheet.flatten([styles.button, styles.opButton]);
const digitTextStyle = StyleSheet.flatten([styles.buttonText, styles.digitText]);
const opTextStyle = StyleSheet.flatten([styles.buttonText, styles.opText]);


export type CalculatorInputButtonPropType = {
    handleFunction: (value?: string) => void;
    value: string;
    type: string;
}

export default function CalculatorInputButton({ handleFunction, value, type }: CalculatorInputButtonPropType) {
    let buttonStyle: ButtonStyle = digitButtonStyle;
    let textStyle = digitTextStyle;
    if( type === 'op') {
        buttonStyle = opButtonStyle;
        textStyle = opTextStyle;
    }
    return (
        <Pressable style={buttonStyle}
            onPress={() => handleFunction(value)}
        >
            <Text style={textStyle}>{value}</Text>
        </Pressable>
    )
}
