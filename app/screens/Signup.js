import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {

    const [name, setName] = useState('');
    const [pin, setPin] = useState('');

    const userData = {
        name,
        pin
    }

    const handleSubmit = async () => {
        try {
            await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
            if (userData !== {}) {
                await AsyncStorage.setItem('@user_token', 'zap_user');
            }
          } catch (e) {
            console.log('@handle_submit: ', e);
          }
    }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/icons/padlock.png')}
        style={styles.icon}
      />
      <View style={styles.info}>
        <Text style={styles.headTxt}>Welcome</Text>
      </View>

      <View style={styles.inputField}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Zap"
          onChangeText={val => setName(val)}
        />
      </View>

      <View style={styles.inputField}>
        <Text>Secret PIN</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="****"
          secureTextEntry
          maxLength={4}
          onChangeText={val => setPin(val)}
        />
      </View>

      <View style={styles.cta}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.ctaTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fgt}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.fgtTxt}>Not a new user? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
    marginBottom: 20,
  },

  inputField: {
    width: '90%',
    marginTop: 10,
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
    marginBottom: 20,
  },
});
