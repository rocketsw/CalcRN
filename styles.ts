import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
  },
  display: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  displayResult: {
    fontSize: 24,
    textAlign: 'right',
  },
  displayText: {
    fontFamily: "Times New Roman",
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  digitButtonContainer: {
    width: '72%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  opButtonContainer: {
    width: '25%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  displayEqualContainer: {
    backgroundColor: 'lightblue',
    width:'22%',
  },
  buttonHide: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 15,
    margin: 5,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  digitButton: {
    width: '22%',
    backgroundColor: '#3498db',
    borderColor: '#004080',
  },
  opButton: {
    width: '22%',
    backgroundColor: '#ff9900',
    borderColor: '#995c00',
  },
  equalButton: {
    alignItems: 'center',
    width: '22%',

    },
  buttonText: {
    fontSize: 24,
  },
  digitText: {
    color: 'white',
  },
  opText: {
    color: 'white',
  },
});
