import React from "react";
import { View, TextInput, Text, Alert, Button, SafeAreaView } from "react-native";


function ShowAlert() {
    Alert.alert("Successful!!!")
}
export default function Employee(props) {
    return (
        <View>
            <Text>Name: {props.name}</Text>
            <Text>Age: {props.age}</Text>
            <Text>Occupation: {props.occupation}</Text>
        </View>);
}