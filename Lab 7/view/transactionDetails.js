import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Card, PaperProvider, Menu, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const TransactionDetail = () => {
  const route = useRoute();
  const {id, cusName, cusphone, creTime, serList, cost, discount} =
    route.params;
  console.log(serList);

  const SimpleMenu = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const HandleUpdate = () => {
      closeMenu();
      navigation.navigate('Update Service');
    };

    const HandleDelete = async () => {
      const token = await AsyncStorage.getItem('userToken');

      const path = 'https://kami-backend-5rs0.onrender.com/transactions/' + id;
      await axios.delete(path, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      console.log(path);
      Alert.alert('Note', 'Update successful!');
      navigation.goBack();
    };
    return (
      <PaperProvider>
        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'right',
            marginLeft: 345,
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button
                style={{width: 100}}
                onPress={openMenu}
                icon={'menu'}></Button>
            }>
            <Menu.Item
              onPress={navigation => {
                HandleUpdate(navigation);
              }}
              title="Update"
            />
            <Menu.Item
              onPress={navigation => {
                HandleDelete(navigation);
              }}
              title="Delete"
            />
          </Menu>
        </View>
      </PaperProvider>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <SimpleMenu></SimpleMenu>
      <Card
        style={{
          marginTop: 10,
          borderColor: '#66579E',
          borderWidth: 3,
          flex: 1,
        }}>
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
