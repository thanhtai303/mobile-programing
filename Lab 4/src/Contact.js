import {useEffect} from 'react';
import {fetchContactsSuccess, mapContacts} from './Stores';
import 'react-native-get-random-values';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContactListItem from './ContactListItem';
import Styles from './styles';

const keyExtractor = ({phone}) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {});
  }, []);

  const renderContacts = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  return (
    <View>
      {
        <FlatList
          data={contacts}
          keyExtractor={keyExtractor}
          renderItem={renderContacts}
        />
      }
    </View>
  );
};

export default Contacts;
