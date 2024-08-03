import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  display: string;
}

const initialState: CalculatorState = {
  display: '0',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string>) {
      console.log('inputDigit old slice: ', action.payload)
      if (state.display === '0') {
        state.display = action.payload;
      } else {
        state.display += action.payload;
      }
    },

    inputDecimal(state) {
        console.log('inputDecimal')
        state.display += '.';
      },

    clearDisplay(state) {
        console.log('clearDisplay')
      state.display = '0';
    },

    calculateResult(state) {
      try {
        state.display = eval(state.display).toString();
      } catch (e) {
        state.display = 'Error';
      }
    },
  },
});

export const { inputDigit, inputDecimal, clearDisplay, calculateResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;

