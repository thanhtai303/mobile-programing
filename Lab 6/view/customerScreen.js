import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, FlatList, Image} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomerScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://kami-backend-5rs0.onrender.com/customers')
      .then(d => {
        setData(d.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    return () => {};
  }, []);

  const HandleAddCustomer = () => {
    navigation.navigate('Add Customer');
  };

  const Item = ({data}) => {
    return (
      <View style={{padding: 5}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#CECCFF',
            width: '100%',
            height: 100,
            margin: 'auto',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 3,
            borderColor: '#9D48FA',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', flex: 4}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  color="#ffff"
                  style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                  Customer:
                </Text>
                <Text
                  color="#ffff"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 15,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {data.name}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  color="#ffff"
                  style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                  Phone:
                </Text>
                <Text
                  color="#ffff"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 15,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 39,
                  }}>
                  {data.phone}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  color="#ffff"
                  style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                  Total spent:
                </Text>
                <Text
                  color="#ffff"
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginLeft: 15,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 7,
                  }}>
                  {data.totalSpent}
                </Text>
              </View>
            </View>
            <View style={{flex: 2}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 40,
                  marginTop: 15,
                  borderColor: '#9D48FA',
                  borderRadius: 25,
                  borderColor: '#9D48FA',
                }}
                source={{
                  uri: 'https://us.123rf.com/450wm/veronchick84/veronchick842006/veronchick84200601165/149185625-vip-icon-privilage-symbol-vector-logo.jpg',
                }}></Image>
              <Text style={{marginLeft: 40, marginTop: 3}}>{data.loyalty}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 10,
            fontSize: 20,
            marginTop: 10,
          }}>
          Customer detail:
        </Text>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 90,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 160,
            borderColor: '#66579E',
            borderWidth: 4,
          }}
          onPress={() => HandleAddCustomer()}>
          <Text style={{fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default CustomerScreen;
