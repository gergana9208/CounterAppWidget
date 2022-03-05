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
   Button,
   StyleSheet,
   TextInput,
 } from 'react-native';
 
 export default class App extends React.Component{
 constructor(){
   super()
     this.state = {
       productCount: 0,
       limitValue: ''
     }
 }

 Increment = () =>{
  this.setState({'productCount': this.state.productCount + 1
  }) 
 }
 Decrement = () =>{
  this.setState({'productCount': this.state.productCount - 1
  }) 
 }

 Reset = () =>{
   alert('Are you sure you want to reset?')
  this.setState({'productCount': (this.state.productCount - this.state.productCount)
  }) 
 }
 Limit = () =>{
  this.setState({'productCount': this.state.limitValue
}) 
 }

 
  render(){
    return(
      <View style={styles.container}> 
        <Text onPress={this.Increment} style={styles.counter}>{this.state.productCount}</Text>
        
      <View style={styles.buttons}>
    
        <DecrementButton onPress={this.Decrement}></DecrementButton>
      </View>
      <View style={styles.alerts}>
        {this.state.limitValue == '' && alert('Please set a limt')}
        {(this.state.productCount !== 0 &&  this.state.productCount >= this.state.limitValue) && <Text style={{fontSize:30, color:'#ba365d'}} >You have reached the limit!</Text>}
      </View>
        
        {(this.state.productCount !== 0 && this.state.productCount >= this.state.limitValue) && alert("Change pump!")}
        <Text style={{fontSize:35}}>Limit Value</Text>
        
        <TextInput
            style={styles.input}
            keyboardType = 'number-pad'
            value={this.state.limitValue}
            textAlign={'center'}
            onChangeText={(limitValue) => this.setState({ limitValue })}
            ref={input => { this.textInput = input }}
            returnKeyType="go"
        />
        {this.state.productCount >= this.state.limitValue &&  <ResetButton onPress={this.Reset}></ResetButton>}
      </View>
    );
  }
 }

 let IncrementButton = (props)=>{
  return(
  <Button title='  Increment  +  'onPress={() => props.onPress()}></Button>
  );
}
 let DecrementButton = (props)=>{
  return(
  <Button size="lg" title='Decrement   -   'onPress={() => props.onPress()}></Button>
  );
}
 let ResetButton = (props)=>{
  return(
  <Button title='Reset Counter'onPress={() => props.onPress()}></Button>
  );
}

 let styles = StyleSheet.create({
   container: {
     flex: 1,
     position:'relative',
     display: 'flex',
     justifyContent: 'center',
     alignContent:'center',
     flexDirection: 'column',
     backgroundColor: '#3A3A3A',
     alignItems: 'center',
     justifyContent: 'center',
   },
   counter:{
     fontSize:300,
     color:'#acb3bd',
   },
   alerts:{
     fontSize:70,
     color:'#ba365d'
   },
   input:{
    height: 74,
    backgroundColor:'#d3d6db',
    width:150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize:40,
    color:'#ba365d',
   },
   buttons:{
    flex:1
   },
   alerts:{
    flex:1
   }
 });
 
 