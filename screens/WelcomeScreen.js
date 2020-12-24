import React,{Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, PickerIOSComponent} from 'react-native'
import firebase from 'firebase';
import db from "../config";


export default class WelcomeScreen extends Component{
    constructor(){
       super();
       this.state={
           emailid:"",
           password:""
       };
       
    }

    userSignUp=(emailid, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailid, password)
        .then((response)=>{
            return Alert.alert("User added!")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }

    userLogin=(emailid, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailid, password)
        .then((response)=>{
            return Alert.alert("Login Successful!")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}><Text style={styles.title}>Book Santa</Text></View>
                <View style={styles.buttonContainer}>
                <TextInput placeholder='ABC@gmail.com' keyboardType='email-address' style={styles.loginBox}
                onChangeText={(text)=>{
                    this.setState({
                    emailid:text
                    });
                }}
                />

                <TextInput secureTextEntry={true} placeholder='enter password' style={styles.loginBox} onChangeText={(text)=>{
                    this.setState({
                   password:text
                 });
                }}/>
       <TouchableOpacity style={styles.button} onPress={()=>{this.userSignUp(this.state.emailid, this.state.password)}}>
           <Text style={styles.buttonText}>Signup</Text></TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={()=>{this.userLogin(this.state.emailid, this.state.password)}}>
           
           <Text style={styles.buttonText}>Login</Text></TouchableOpacity>

            </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFB6c1',
    },

    title:{
        fontSize:32,
        fontWeight:300,
        color: 'white'
    },

    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:"white",
        fontSize:18,
        margin:10,
        paddingLeft:10,
    },

    button:{
        width:300,
        height:50,
        justifyContent:"center",
        borderRadius:25,
        backgroundColor:"white",
        shadowColor: "black",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.3,
        shadowRadius:10.5,
        elevation:16,
    },

    buttonText:{
        fontWeight:200,
        fontSize:20,
        color:"white",
    },

    profileContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },

    buttonContainer:{
        flex:1,
        alignItems:"center",
    }
})