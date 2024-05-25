import {TouchableHighlight, Text, Image, View} from 'react-native';

const ContactListItem = ({name, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      styles={styles.listContainer}
      onPress={onPress}>
      <View style={styles.contactInfo}>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
