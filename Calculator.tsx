import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { inputDigit, inputDecimal, setOperation, clearDisplay, debug, calculateResult } from './features/calculatorSlice';
import CalculatorInputButton from './components/CalculatorInputButton';
//import { ACTIONS } from './constants/Actions'

// division symbol is ÷

export const Calculator = () => {

  const current = useSelector((state: RootState) => state.calculator.currentOperand);
  const previous = useSelector((state: RootState) => state.calculator.previousOperand);
  const operation = useSelector((state: RootState) => state.calculator.operation);
  const dispatch = useDispatch();

  const handleDigitPress = (value?: string) => {
    //console.log("handleDigitPress: ", digit);
    dispatch(inputDigit(value));
    //dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
  };

  const handleChooseOperation = (operation?: string) => {
    //console.log("handleChooseOperation: ", operation);
    dispatch(setOperation(operation));
    //dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  };
  const handleDecimalPress = () => {
    //console.log("handleDecimalPress calls dispatch");
    dispatch(inputDecimal());
  };

  const handleClearPress = () => {
    //console.log("handleClearPress calls dispatch");
    dispatch(clearDisplay());
  };

  const handleEqualPress = () => {
    //console.log("handleEqualPress calls dispatch");
    dispatch(calculateResult());
  };

  const handleDebugPress = () => {
    dispatch(debug())
  }

  /*
    const renderButton = (text: string, onPress: () => void) => (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    );
  */
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{current}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorInputButton handleFunction={handleDigitPress} value="7" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="8" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="9" />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="÷" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="4" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="5" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="6" />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="*" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="1" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="2" />
        <CalculatorInputButton handleFunction={handleDigitPress} value="3" />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="-" />
        <CalculatorInputButton handleFunction={handleDecimalPress} value="." />
        <CalculatorInputButton handleFunction={handleDigitPress} value="0" />
        <CalculatorInputButton handleFunction={handleClearPress} value="C" />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="+" />
        <CalculatorInputButton handleFunction={handleEqualPress} value="=" />
        { /* <CalculatorInputButton handleFunction={handleDebugPress} value="debug" /> */}
      </View>
      <View style={styles.display}>
        <Text>Current Operand: {current}</Text>
        <Text>Previous Operand: {previous}</Text>
        <Text>Operation: {operation}</Text>
      </View>
    </View>
  );
}

/*
<View style={styles.display}>
<Text>Current Operand: {current}</Text>
<Text>Previous Operand: {previous}</Text>
<Text>Operation: {operation}</Text>
</View>
*/

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  display: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  displayText: {
    fontSize: 36,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});

//export default Calculator;