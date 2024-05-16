import React from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import {Searchbar, Card, Button} from 'react-native-paper';
import Styles from './Styles';

const SearchProductScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);
  let filePathSearch = 'https://dummyjson.com/products/search?q=';
  const handleSearchProduct = () => {
    if (searchQuery != '') {
      filePathSearch += searchQuery;
    }
    fetch(filePathSearch)
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
  };

  const Item = ({data}) => {
    return (
      <View style={Styles.containerProduct}>
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
      </View>
    );
  };
  return (
    <SafeAreaView style={Styles.containerProduct}>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          returnKeyType="done"
          onSubmitEditing={handleSearchProduct}
        />
      </View>

      <View style={Styles.containerInput}>
        <Button
          mode="contained-tonal"
          buttonColor="black"
          textColor="white"
          icon="archive-search-outline"
          onPress={handleSearchProduct}>
          <Text style={Styles.buttonTextAddProduct}>Search</Text>
        </Button>
      </View>
      <SafeAreaView style={Styles.view}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default SearchProductScreen;
