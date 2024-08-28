//import { ACTIONS } from "../constants/Actions"
import { Pressable, StyleSheet, Text } from "react-native";
import { styles } from "../styles";

const digitButtonStyle = StyleSheet.flatten([styles.button, styles.digitButton]);
const opButtonStyle = StyleSheet.flatten([styles.button, styles.opButton]);
const digitButtonText = StyleSheet.flatten([styles.buttonText, styles.digitText]);
const opButtonText = StyleSheet.flatten([styles.buttonText, styles.opText]);


export type CalculatorInputButtonPropType = {
    handleFunction: (value?: string) => void;
    value?: string;
    type: string;
}

export default function CalculatorInputButton({ handleFunction, value, type }: CalculatorInputButtonPropType) {
    let buttonStyle = digitButtonStyle;
    let buttonText = digitButtonText;
    if( type === 'op') {
        buttonStyle = opButtonStyle;
        buttonText = opButtonText;
    }
    return (
        <Pressable style={buttonStyle}
            onPress={() => handleFunction(value)}
        >
            <Text style={buttonText}>{value}</Text>
        </Pressable>
    )
}
