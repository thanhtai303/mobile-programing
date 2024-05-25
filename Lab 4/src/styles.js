import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContainer: {
    paddingLeft: 50,
    marginTop: 0,
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 25,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'blue',
    fontSize: 14,
    marginTop: 4,
  },
});
