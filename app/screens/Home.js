import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'

const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Text>Home</Text>
            <View style={styles.pointBD}>
              <Text style={styles.degree}>Currnet CGPA</Text>
              <Text style={styles.cgpa}>3.75</Text>
              <Text style={styles.degree}>SECOND CLASS UPPER</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={styles.sem}>
                <TouchableOpacity>
                  <Text style={styles.semTxt}>4.22</Text>
                  <Text style={styles.semTxt2}>Highest GPA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sem}>
                <TouchableOpacity>
                  <Text style={styles.semTxt}>3.12</Text>
                  <Text style={styles.semTxt2}>Lowest GPA</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Sessions */}
            <View style={{marginTop: 40}}>
              <Text>Sessions</Text>
            </View>
            <View style={styles.sessions}>
              <TouchableOpacity>
                <View style={styles.year}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/icons/book.png')}
                      style={{width: 25, height: 25}}
                    />
                    <View>
                      <Text style={styles.yearTxt}>Year 1</Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={{width: 20, height: 20, alignSelf: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.year}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/icons/book.png')}
                      style={{width: 25, height: 25}}
                    />
                    <View>
                      <Text style={styles.yearTxt}>Year 2</Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={{width: 20, height: 20, alignSelf: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.year}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/icons/book.png')}
                      style={{width: 25, height: 25}}
                    />
                    <View>
                      <Text style={styles.yearTxt}>Year 3</Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={{width: 20, height: 20, alignSelf: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.year}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/icons/book.png')}
                      style={{width: 25, height: 25}}
                    />
                    <View>
                      <Text style={styles.yearTxt}>Year 4</Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={{width: 20, height: 20, alignSelf: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.add}>
              <TouchableOpacity>
                <Text style={styles.addTxt}>Add Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  wrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  pointBD: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 5,
  },

  cgpa: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 45,
    color: '#6C63FF',
  },

  degree: {
    textAlign: 'center',
    fontSize: 10,
    color: '#777',
  },

  sem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },

  semTxt: {
    textAlign: 'center',
    color: '#6C63FF',
    fontSize: 12,
    fontWeight: '600',
  },

  semTxt2: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
  },

  sessions: {
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },

  year: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 5,
    padding: 10,
  },

  yearTxt: {
      alignSelf: 'flex-end',
      textAlign: 'center',
      marginLeft: 10,
      fontWeight: '400',
      fontSize: 20
  },

  add: {
    marginBottom: 30,
    backgroundColor: '#6C63FF',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },

  addTxt: {
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});
