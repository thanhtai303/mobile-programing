import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  input: {
    width: 330,
    height: 50,
    borderRadius: 15,
    borderColor: '#565896',
    borderWidth: 3,
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 0,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    color: '#9296FF',
  },

  button: {
    width: 200,
    height: 50,
    borderRadius: 50,
    borderColor: '#565896',
    borderWidth: 3,
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#9296FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
