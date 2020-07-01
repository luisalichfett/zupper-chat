import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    width: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'rgb(104, 110, 120)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  default: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    zIndex: -1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default style;
