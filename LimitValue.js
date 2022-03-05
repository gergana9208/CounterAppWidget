import React from 'react';
 import type {Node} from 'react';
 import {
   Text,
   View,
   Button,
   StyleSheet,
   TextInput,
 } from 'react-native';

    

    const LimitValue = (props)=>{
      return(
        <View>
          <TextInput
          style={styles.counter}
          placeholder="Add"
          value={this.state.LimitValue}
          onChangeText={(LimitValue) => this.setState({ LimitValue })}
          ref={input => { this.textInput = input }}
          returnKeyType="go"
          />
      </View>
          
      );
  }

  export default LimitValue;