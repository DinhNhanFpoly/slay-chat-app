import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import signUpStyle from './style'
import { TextInput } from 'react-native-gesture-handler'
const SignUp = () => {
  return (
    <View style={signUpStyle.container}>
      <Image style={signUpStyle.logo} source={require('../SignUp/logo.png')} />
       <Text style={signUpStyle.title}>Wellcome</Text>
       <Text style={signUpStyle.title1}>Create account</Text>
       <TextInput placeholder="Email" style={signUpStyle.input}/>
       <TextInput placeholder="Password" style={signUpStyle.input}/>
       <TextInput placeholder="Confirm password" style={signUpStyle.input}/>
       <TouchableOpacity style={signUpStyle.button}>
        <Text style={signUpStyle.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={signUpStyle.text}>Already have an account? <Text style={signUpStyle.text1}>Login</Text></Text>
    </View>
  )
}

export default SignUp