import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import {Card, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const TransactionsScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://kami-backend-5rs0.onrender.com/transactions')
      .then(d => {
        setData(d.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    return () => {};
  }, []);
  const navigation = useNavigation();

  const Item = ({data}) => {
    return (
      <SafeAreaView style={{padding: 5}}>
        <Card
          style={{
            backgroundColor: '#CECCFF',
            borderColor: '#66579E',
            borderWidth: 3,
          }}>
          <Card.Title title={data.id + ' ' + data.createdAt} />
          <Card.Content>
            <Text style={{fontWeight: 'bold'}}>
              Customer name: {data.customer.name}{' '}
            </Text>
            {data.services.map(service => (
              <Text key={service._id}>- {service.name}</Text>
            ))}
          </Card.Content>
          <Card.Actions>
            <Button
              style={{backgroundColor: '#66579E'}}
              onPress={() =>
                navigation.navigate('Detail', {
                  id: data.id,
                  cusName: data.customer.name,
                  cusphone: data.customer.phone,
                  creTime: data.createdAt,
                  serList: data.services,
                  cost: data.priceBeforePromotion,
                  discount: data.price,
                })
              }>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>Detail</Text>
            </Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Item data={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default TransactionsScreen;
