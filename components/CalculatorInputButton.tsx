//import { ACTIONS } from "../constants/Actions"
import { Pressable, Text } from "react-native";
import { styles } from '../Calculator'

export type CalculatorInputButtonPropType = {
    handleFunction: (value?: string) => void;
    value?: string;
}

export default function CalculatorInputButton({ handleFunction, value }: CalculatorInputButtonPropType) {

    return (
        <Pressable style={styles.button}
            onPress={() => handleFunction(value)}
        >
            <Text style={styles.buttonText}>{value}</Text>
        </Pressable>
    )
}

