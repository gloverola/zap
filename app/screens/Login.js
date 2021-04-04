import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native'

const Login = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
          <Image source={require('../assets/icons/padlock.png')} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.headTxt}>Welcome Back</Text>
          <Text style={styles.subTxt}>Glover</Text>
        </View>

        <View style={styles.inputField}>
          <Text>Secret PIN</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="****"
            secureTextEntry
            maxLength={4}
          />
        </View>

        <View style={styles.cta}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.ctaTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fgt}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.fgtTxt}>Forgot your PIN?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },

  headTxt: {
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },

  subTxt: {
    textAlign: 'center',
    marginTop: 10,
  },

  inputField: {
    width: '90%',
    marginTop: 50,
  },

  input: {
    backgroundColor: '#e2e0ff',
    padding: 14,
    borderBottomWidth: 2,
    borderBottomColor: '#6C63FF',
    marginTop: 5,
  },

  cta: {
    marginBottom: 30,
    backgroundColor: '#6C63FF',
    width: '90%',
    borderRadius: 5,
    marginTop: 20,
  },

  ctaTxt: {
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },

  fgtTxt: {
    fontWeight: '600',
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 20
  },
});
