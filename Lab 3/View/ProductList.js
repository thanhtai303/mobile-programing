import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Card, Button, Text, PaperProvider} from 'react-native-paper';
import Styles from './Styles';
import {SafeAreaView} from 'react-native';

const ProductListScreen = () => {
  const [data, setData] = useState([]);
  const [ID, setID] = useState('');
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log(data);
  console.log(ID);
  function Edit(ID) {
    console.log(ID);
  }
  const Item = ({data}) => {
    return (
      <SafeAreaView style={Styles.containerProduct}>
        <Card>
          <Card.Content>
            <Text style={Styles.titleText}>{data.title}</Text>
          </Card.Content>
          <Card.Cover resizeMode="cover" source={{uri: data.thumbnail}} />
          <Card.Content>
            <Text>Description: {data.description}</Text>
            <Text>Price: {data.price}</Text>
            <Text>Discount: {data.discountPercentage}%</Text>
            <Text>Rating: {data.rating}</Text>
            <Text>Stock: {data.stock}</Text>
            <Text>Brand: {data.brand}</Text>
            <Text>Category: {data.category}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              buttonColor="#000"
              textColor="#FFFF"
              icon="reorder-horizontal"
              onPress={() => setID(data.id)}>
              Detail
            </Button>
            <Button buttonColor="#000" textColor="#FFFF" icon="plus">
              Add
            </Button>
            <Button buttonColor="#000" textColor="#FFFF" icon="delete">
              Delete
            </Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    );
  };

  return (
    <PaperProvider style={Styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </PaperProvider>
  );
};

export default ProductListScreen;
