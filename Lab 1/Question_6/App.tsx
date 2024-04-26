import React from "react";
import Employee from "./Code/employee";
import Count from "./Code/SumFirstAndLastDigit";
import Output from "./Code/SumFirstAndLastDigit";
import OutputMin from "./Code/FindMin";
import { View } from "react-native";
import HalstoneSequence from "./Code/HailstoneSequence";

export default function App() {

  return (
    //Question 1
    //<Employee name="Nguyen Thanh Tai" age="22" occupation="Engineer"/>


    //Question 2 
    //<Output number={768989576957}></Output>


    //Question 3
    //<OutputMin a={600} b={6} c={15}/>

    //Question 4
    <HalstoneSequence number={1000000000000000000} />

  );
}