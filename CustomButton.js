/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   Text,
   View,
   Button
 } from 'react-native';
 
 const CustomButton = (props)=>{
        return(
          <View>
        <Button title='Increment'onPress={() => props.onPress()}></Button>

       
        </View>
            
        );
    }
    
 
 
 export default CustomButton;

 
 
 