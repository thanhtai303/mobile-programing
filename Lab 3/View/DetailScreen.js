import * as React from 'react';
import {Text, Button, PaperProvider, Card} from 'react-native-paper';
import {useState, useEffect} from 'react';
import Styles from './Styles';

const DetailScreen = () => {
  const [data, setData] = useState([]);
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
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <PaperProvider>
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
            icon="reorder-horizontal">
            Go back
          </Button>
          <Button buttonColor="#000" textColor="#FFFF" icon="plus">
            Add
          </Button>
          <Button buttonColor="#000" textColor="#FFFF" icon="delete">
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </PaperProvider>
  );
};

export default DetailScreen;
