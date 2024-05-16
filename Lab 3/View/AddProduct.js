import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text, Alert, SafeAreaView} from 'react-native';
import Styles from './Styles';

const AddProductScreen = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [discount, setDiscount] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [stock, setStock] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discount: discount,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        image: image,
      }),
    })
      .then(response => response.json())
      .then(console.log);
    Alert.alert('Add sucessfull');
  };

  return (
    <SafeAreaView>
      <View style={Styles.containerTitleAddProduct}>
        <Text style={Styles.titleText}>Add a new product</Text>
      </View>
      <View style={Styles.containerAddProduct}>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Price"
            value={price}
            onChangeText={text => setPrice(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Discount"
            value={discount}
            onChangeText={text => setDiscount(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Rating"
            value={rating}
            onChangeText={text => setRating(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Stock"
            value={stock}
            onChangeText={text => setStock(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Brand"
            value={brand}
            onChangeText={text => setBrand(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Category"
            value={category}
            onChangeText={text => setCategory(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <TextInput
            mode="outlined"
            label="Image URL"
            value={image}
            onChangeText={text => setImage(text)}
          />
        </View>
        <View style={Styles.containerInput}>
          <Button
            mode="contained-tonal"
            buttonColor="black"
            textColor="white"
            icon="archive-plus-outline"
            onPress={handleSubmit}>
            <Text style={Styles.buttonTextAddProduct}>Submit</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddProductScreen;
