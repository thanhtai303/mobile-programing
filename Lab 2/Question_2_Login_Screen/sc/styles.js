import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'top',
    alignItems: 'center',
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Lucida Sans Unicode',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#3E3661',
    marginBottom: 75,
    marginTop: 100,
    borderColor: '#66579E',
    borderWidth: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    borderColor: '#66579E',
    backgroundColor: 'white',
    color: '#3E3661',
    borderWidth: 2,
    borderRadius: 15,
    width: '100%',
    marginTop: 15,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#3E3661',
    borderRadius: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    borderColor: '#66579E',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFF',
    fontWeight: 'bold',
  },
});
