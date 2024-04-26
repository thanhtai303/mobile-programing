import React from "react";
import { Text, View } from "react-native";

function Count(number) {
    var firstDigitNumber = Number(String(number)[0]);
    var lastDigitNumber = Number(String(number).slice(-1));
    return lastDigitNumber+firstDigitNumber;
}
export default function Output(number) {
    Count(number.number);
    return(
        <View>
           <Text> The sum of first and last digit is {Count(number.number)}</Text> 
        </View>
    );
}