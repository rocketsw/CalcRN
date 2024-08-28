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
  button_: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    width: '22%',
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  digitButton: {
    backgroundColor: '#3498db',
    borderColor: '#004080',
  },
  opButton: {
    backgroundColor: '#ff9900',
    borderColor: '#995c00',
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
