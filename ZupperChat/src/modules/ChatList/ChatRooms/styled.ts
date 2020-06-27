import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  userContainer: {
    backgroundColor: '#000',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomColor: '#99cdb8',
    borderBottomWidth: 1,
  },
  userPhoto: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: '#20232a',
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
    flexDirection: 'column',
  },
});

export default style;
