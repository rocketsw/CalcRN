import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { inputDigit, inputDecimal, setOperation, clearAll, clearDisplay, changeSign, backSpace, oneOverX, xSquared, memoryStore, memoryRecall, memoryClear, debug, calculateResult } from './features/calculatorSlice';
import CalculatorInputButton from './components/CalculatorInputButton';
import { styles } from "./styles";
//import { ACTIONS } from './constants/Actions'

// division symbol is ÷

export const Calculator = () => {

  const current = useSelector((state: RootState) => state.calculator.currentOperand);
  const previous = useSelector((state: RootState) => state.calculator.previousOperand);
  const operation = useSelector((state: RootState) => state.calculator.operation);
  const memory = useSelector((state: RootState) => state.calculator.memory);
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

  const handleClearAllPress = () => {
    //console.log("handleClearPress calls dispatch");
    dispatch(clearAll());
  };

  const handleClearDisplayPress = () => {
    //console.log("handleClearPress calls dispatch");
    dispatch(clearDisplay());
  };

  const handleEqualPress = () => {
    //console.log("handleEqualPress calls dispatch");
    dispatch(calculateResult());
  };

  const handleBackSpacePress = () => {
    //console.log("handleBackSpace calls dispatch");
    dispatch(backSpace());
  };

  const handleOneOverXPress = () => {
    //console.log("handleBackSpace calls dispatch");
    dispatch(oneOverX());
  };

  const handleXSquaredPress = () => {
    //console.log("handleBackSpace calls dispatch");
    dispatch(xSquared());
  };

  const handleChangeSignPress = () => {
    dispatch(changeSign())
  }

  const handleMemoryStorePress = () => {
    dispatch(memoryStore())
  }
  const handleMemoryRecallPress = () => {
    dispatch(memoryRecall())
  }
  const handleMemoryClearPress = () => {
    dispatch(memoryClear())
  }
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
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.displayText}>React Native Calculator</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayResult}>{current}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CalculatorInputButton handleFunction={handleOneOverXPress} value="1/x" type='op' />
        <CalculatorInputButton handleFunction={handleMemoryStorePress} value="MS" type='op' />
        <CalculatorInputButton handleFunction={handleMemoryRecallPress} value="MR" type='op' />
        <CalculatorInputButton handleFunction={handleMemoryClearPress} value="MC" type='op' />

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

        <CalculatorInputButton handleFunction={handleChangeSignPress} value="+/-" type='digit' />
        <CalculatorInputButton handleFunction={handleDigitPress} value="0" type='digit' />
        <CalculatorInputButton handleFunction={handleDecimalPress} value="." type='digit' />
        <CalculatorInputButton handleFunction={handleChooseOperation} value="+" type='op' />

        <CalculatorInputButton handleFunction={handleClearAllPress} value="C" type='digit' />
        <CalculatorInputButton handleFunction={handleClearDisplayPress} value="CE" type='digit' />
        <CalculatorInputButton handleFunction={handleBackSpacePress} value="&#x232B;" type='digit' />
        <CalculatorInputButton handleFunction={handleEqualPress} value="=" type='op' />
      </View>

      <View style={styles.display}>
        <Text>Current Operand: {current}</Text>
        <Text>Previous Operand: {previous}</Text>
        <Text>Operation: {operation}</Text>
        <Text>Memory: {memory}</Text>
      </View>
    </ScrollView>
  );
}
