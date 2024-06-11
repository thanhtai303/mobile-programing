import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Card} from 'react-native-paper';

const TransactionDetail = () => {
  const route = useRoute();
  const {id, cusName, cusphone, creTime, serList, cost, discount} =
    route.params;
  console.log(serList);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Card style={{marginTop: 10, borderColor: '#66579E', borderWidth: 3}}>
        <Card.Title title="General infomation" />
        <Card.Content>
          <Text>Transaction code: {id}</Text>
          <Text>
            Customer: {cusName} - {cusphone}
          </Text>
          <Text>Creation time: {creTime}</Text>
        </Card.Content>
      </Card>
      <Card style={{marginTop: 10, borderColor: '#66579E', borderWidth: 3}}>
        <Card.Title title="Services list" />
        <Card.Content>
          {serList.map(service => (
            <View style={{flexDirection: 'row'}}>
              <Text key={service._id}>- {service.name}</Text>
              <Text style={{margin: 'auto'}} key={service._id}>
                x{service.quantity}
              </Text>
              <Text key={service._id}>{service.price} đ</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
      <Card style={{marginTop: 10, borderColor: '#66579E', borderWidth: 3}}>
        <Card.Title title="Cost" />
        <Card.Content>
          <View style={{flexDirection: 'row'}}>
            <Text>Total amount: </Text>
            <Text style={{margin: 'auto'}}>{cost} đ</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text> Discount:</Text>

            <Text style={{margin: 'auto'}}>{Number(discount - cost)} đ</Text>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};
export default TransactionDetail;
