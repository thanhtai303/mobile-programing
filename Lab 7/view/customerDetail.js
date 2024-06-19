import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Card, Menu} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {PaperProvider, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomerDetail = () => {
  const route = useRoute();
  const {id} = route.params;
  const [data, setData] = useState('');
  useEffect(() => {
    async function GetDatta() {
      const path = 'https://kami-backend-5rs0.onrender.com/customers/' + id;
      const data = await axios.get(path);
      setData(data);
    }
    GetDatta();
  }, []);
  const TransactionDetails = () => {
    return data.transactions.map(transaction => (
      <Card
        style={{
          backgroundColor: '#CECCFF',
          borderColor: '#66579E',
          borderWidth: 3,
        }}>
        <Card.Title title={transaction.id + ' ' + transaction.createdAt} />
        <Card.Content>
          {transaction.services.map(service => (
            <Text key={service._id}>- {service.name}</Text>
          ))}
        </Card.Content>
      </Card>
    ));
  };

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
      const path = 'https://kami-backend-5rs0.onrender.com/customer/' + id;
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
            marginLeft: 300,
            flex: 1,
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
              title="Edit"
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
      <View style={{flex: 2}}>
        <Card style={{marginTop: 10, borderColor: '#66579E', borderWidth: 3}}>
          <Card.Title title="General infomation" />
          <Card.Content>
            <Text>Name: {data.name}</Text>
            <Text>Phone: {data.phone}</Text>
            <Text>Total spent: {data.totalSpent}</Text>
            <Text>Time: {data.createdAt}</Text>
            <Text>Last update: {data.updatedAt}</Text>
          </Card.Content>
        </Card>
        <Card style={{marginTop: 10}}>
          <Card.Title title="Transaction history"></Card.Title>
          {/* <TransactionDetails></TransactionDetails> */}
        </Card>
      </View>
    </SafeAreaView>
  );
};
export default CustomerDetail;
