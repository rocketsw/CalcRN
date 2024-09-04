import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  overwrite: boolean;
  memory: string;
  canPressEqual: boolean;
}

const initialState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '0',
  operation: '',
  overwrite: true,
  memory: '0',
  canPressEqual: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string | undefined>) {
      //console.log('inputDigit: ', action.payload);
      if (action != null && action.payload != null) {
        if (state.overwrite) {
          state.currentOperand = action.payload;
          state.overwrite = false;
          state.canPressEqual = true;
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
          state.canPressEqual = true;
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
        state.canPressEqual = false;
        return;
      }
      state.overwrite = true;
      state.canPressEqual = false;

      if (state.currentOperand == '0' && state.previousOperand == '0') {
        //console.log("no curr or prev operand")
        return;
      }
      if (action != null && action.payload != null) {
        if (state.currentOperand == '0') {
          //console.log('no curr operand, set operation');
          state.operation = action.payload;
          return;
        }
        if (state.previousOperand === '' || state.previousOperand === '0') {
          //console.log("no prev operand, set prev to curr, curr to null, set operation")
          state.previousOperand = state.currentOperand;
          state.currentOperand = '0';
          state.overwrite = true;
          state.canPressEqual = false;
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
          state.canPressEqual = false;
          return;
        }
      }
    },

    clearAll(state) {
      //console.log('clearAll');
      state.currentOperand = '0';
      state.previousOperand = '0';
      state.operation = '';
      state.overwrite = true;
      state.canPressEqual = false;
    },

    clearDisplay(state) {
      //console.log('clearDisplay');
      state.currentOperand = '0';
      state.overwrite = true;
      state.canPressEqual = false;
    },

    changeSign(state) {
      //console.log('changeSign');
      if (state.currentOperand.at(0) != '0') {
        if (state.currentOperand.at(0) == '-') {
          state.currentOperand = state.currentOperand.slice(1);
        } else {
          state.currentOperand = '-' + state.currentOperand;
        }
      }
    },

    backSpace(state) {
      //console.log('backSpace', 'length', state.currentOperand.length);
      let newValue = '0';
      if (state.currentOperand != '0' && state.currentOperand.length > 0) {
        newValue = state.currentOperand.slice(
          0,
          state.currentOperand.length - 1,
        );
        if (newValue.length === 0) {
          newValue = '0';
          state.overwrite = true;
          state.canPressEqual = false;
        }
        state.currentOperand = newValue;
      }
    },

    oneOverX(state) {
      //console.log('1/X');
      if (state.currentOperand != null && state.currentOperand != '0' && state.currentOperand.length > 0) {
        try {
          //if (!state.overwrite) {
              const current = parseFloat(state.currentOperand);
              if (!isNaN(current)) {
                let computation: number = 0;
                computation = 1 / current;
                state.currentOperand = computation.toString()
                state.overwrite = true;
                state.canPressEqual = true;
              }
           //}
        } catch (e) {
          state.currentOperand = 'Error';
          state.previousOperand = '0';
          state.operation = '';
          state.overwrite = true;
          state.canPressEqual = false;
        }
      }
    },

    xSquared(state) {
      //console.log('1/X');
      if (state.currentOperand != null && state.currentOperand != '0' && state.currentOperand.length > 0) {
        try {
          if (!state.overwrite) {
              const current = parseFloat(state.currentOperand);
              if (!isNaN(current)) {
                let computation: number = 0;
                computation = current ** 2;
                state.currentOperand = computation.toString()
                state.overwrite = true;
                state.canPressEqual = true;
              }
           }
        } catch (e) {
          state.currentOperand = 'Error';
          state.previousOperand = '0';
          state.operation = '';
        }
      }
    },

    memoryStore(state) {
      console.log('memoryStore', state.currentOperand);
      state.memory = state.currentOperand;
      state.overwrite = true;
    },

    memoryRecall(state) {
      console.log('memoryRecall', state.memory);
      state.currentOperand = state.memory;
      state.overwrite = true;
      state.canPressEqual = true;
    },

    memoryClear(state) {
      console.log('memoryClear', state.memory);
      state.memory = '0';
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
        if (state.canPressEqual) {
        //if(state.currentOperand && state.previousOperand && state.operation) {
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
            state.canPressEqual = false;
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
  clearAll,
  clearDisplay,
  changeSign,
  backSpace,
  oneOverX,
  xSquared,
  memoryStore,
  memoryRecall,
  memoryClear,
  debug,
  calculateResult,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
