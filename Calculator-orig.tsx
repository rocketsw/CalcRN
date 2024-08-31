import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { inputDigit, inputDecimal, setOperation, clearDisplay, debug, calculateResult } from './features/calculatorSlice';
import CalculatorInputButton from './components/CalculatorInputButton';
import { styles } from "./styles";
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
      <View>
        <Text style={styles.displayText}>React Native Calculator</Text>
      </View>      
      <View style={styles.display}>
        <Text style={styles.displayResult}>{current}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CalculatorInputButton handleFunction={handleDigitPress} value="7" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="8" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="9" type='digit' />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="÷" type='op' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="4" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="5" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="6" type='digit' />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="*" type='op' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="1" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="2" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="3" type='digit' />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="-" type='op' />
        <CalculatorInputButton handleFunction={handleDecimalPress} value="." type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="0" type='digit' />
        <CalculatorInputButton handleFunction={handleClearPress} value="C" type='digit' />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="+" type='op' />
        <CalculatorInputButton handleFunction={handleEqualPress} value="=" type='op' />
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
