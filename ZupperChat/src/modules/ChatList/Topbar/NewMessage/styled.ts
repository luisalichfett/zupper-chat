import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '80%',
    backgroundColor: '#373940',
    paddingTop: -20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 55,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#373940',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  searchField: {
    position: 'absolute',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
  },
  sectionTitle: {
    backgroundColor: '#373940',
    paddingLeft: 20,
  },
  userContainer: {
    backgroundColor: '#20232a',
    padding: 20,
    marginVertical: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userPhoto: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
    flexDirection: 'column',
  },
});

export default style;
