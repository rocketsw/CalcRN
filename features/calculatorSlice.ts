import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  overwrite: boolean;
}

const initialState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '0',
  operation: '',
  overwrite: true,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string | undefined>) {
      //console.log("inputDigit: ", action.payload);
      if (action != null && action.payload != null) {
        if (state.overwrite) {
          state.currentOperand = action.payload;
          state.overwrite = false;
        } else {
          if (state.currentOperand === '0') {
            return;
          }
          if (!(state.currentOperand === '0' && action.payload === '0')) {
            state.currentOperand += action.payload;
            return;
          }
        }
      }
    },

    inputDecimal(state) {
      //console.log("inputDecimal");
      if (!state.currentOperand.includes('.')) {
        if (!state.overwrite) {
          state.currentOperand += '.';
        } else {
          state.currentOperand = '.';
          state.overwrite = false;
        }
      }
    },

    setOperation(state, action: PayloadAction<string | undefined>) {
      //console.log('chooseOperation: ', action.payload);
      if (state.operation && action != null && action.payload != null) {
        //console.log('existing state.operation', state.operation);
        const computedValue = evaluate(state);
        state.currentOperand = computedValue;
        state.previousOperand = computedValue;
        state.operation = action.payload;
        state.overwrite = true;
        return;
      }
      state.overwrite = true;

      if (state.currentOperand == '0' && state.previousOperand == '0') {
        //console.log("no curr or prev operand")
        return;
      }
      if (action != null && action.payload != null) {
        if (state.currentOperand == '0') {
          console.log('no curr operand, set operation');
          state.operation = action.payload;
          return;
        }
        if (state.previousOperand === '' || state.previousOperand === '0') {
          //console.log("no prev operand, set prev to curr, curr to null, set operation")
          state.previousOperand = state.currentOperand;
          state.currentOperand = '0';
          state.overwrite = true;
          state.operation = action.payload;
          return;
        }
        if (state.currentOperand == '0') {
          //console.log("no curr operand, set operation?")
          state.operation = action.payload;
          return;
        }
        if (state.previousOperand == '0') {
          //console.log("no prev operand, set operation and prev operand to curr")
          state.operation = action.payload;
          state.previousOperand = state.currentOperand;
          state.currentOperand = '0';
          state.overwrite = true;
          return;
        }
      }
    },

    clearDisplay(state) {
      //console.log('clearDisplay');
      state.currentOperand = '0';
      state.operation = '';
      state.overwrite = true;
    },

    debug(state) {
      console.log(
        'debug currOp: ',
        state.currentOperand,
        ', prevOp: ',
        state.previousOperand,
        ', Operation: ',
        state.operation,
      );
    },

    calculateResult(state) {
      try {
        if (!state.overwrite) {
          if (
            !(
              state.operation == null ||
              state.currentOperand == null ||
              state.previousOperand == null
            )
          ) {
            state.currentOperand = evaluate(state);
            state.previousOperand = '0';
            state.operation = '';
            state.overwrite = true;
            //console.log('overwrite set to true');
          }
        }
      } catch (e) {
        state.currentOperand = 'Error';
        state.previousOperand = '0';
        state.operation = '';
      }
    },
  },
});

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: CalculatorState) {
  //console.log('evaluate', previousOperand, currentOperand, operation )
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation: number = 0;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
  }
  //console.log('computed value', computation.toString());
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

function formatOperand(operand: string) {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(parseInt(integer));
  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`;
}

export const {
  inputDigit,
  inputDecimal,
  setOperation,
  clearDisplay,
  debug,
  calculateResult,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
