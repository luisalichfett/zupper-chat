import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: -11.5,
    height: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    transform: [{ rotate: '180deg' }],
  },
  children: {
    position: 'relative',
    paddingTop: 20,
  },
});

export default style;
