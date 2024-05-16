import React from 'react';
import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  containerImageProducts: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'ceter',
    justifyContent: 'center',
    margin: 'auto',
  },
  container: {
    padding: 5,
    flex: 2,
    backgroundColor: '#BFBFBF',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 'auto',
    color: '#000',
  },
  button: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 5,
    borderRadius: 15,
    margin: 'auto',
  },
  containerButtonProduct: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  containerProduct: {
    padding: 5,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  view: {
    backgroundColor: '#BFBFBF',
  },
  containerInput: {
    padding: 5,
  },
  buttonTextAddProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'Grey',
  },
  containerAddProduct: {
    padding: 25,
    marginBottom: 100,
  },
  containerTitleAddProduct: {
    marginTop: 100,
  },
  containerSearchBar: {
    flex: 1,
    flexDirection: 'row',
  },
});
