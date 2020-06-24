import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '87.5%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    resizeMode: 'contain',
    position: 'relative',
    height: 120,
    width: 120,
  },
  userEmptyPhoto: {
    flex: 1,
    position: 'relative',
  },
  newMessage: {
    flex: 1,
    position: 'relative',
    left: '60%',
  },
});

export default style;
