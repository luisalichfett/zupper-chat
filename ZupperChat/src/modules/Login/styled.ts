import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    top: 560,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default style;
