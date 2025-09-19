import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlay, faSun } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../assets/logo.png';
import { books } from '../data/sample/books';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
  },
  headerContainer: {
    padding: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  profileMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 2,
  },
  profileMessage: {
    fontSize: 16,
    color: '#2E403B',
  },
  profileName: {
    color: '#2E403B',
    fontSize: 30,
    marginTop: 5,
  },
  clickToGo: {
    backgroundColor: '#6AC46A',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    padding: 20,
    alignItems: 'center',
  },
  clickToGoDetails: {
    justifyContent: 'center',
  },
  clickToGoTitle: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 16,
  },
  clickToGoCategory: {
    color: '#fff',
    fontSize: 24,
  },
  clickToGoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playGround: {
    backgroundColor: '#E9F5E9',
    padding: 20,
  },
  playGroundTitle: {
    color: '#2E403B',
    fontSize: 26,
    fontWeight: '500',
    paddingBottom: 20,
    textAlign: 'right',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 15,
  },
  category: {
    width: (screen.width - 60) / 2,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  categoryName: {
    color: '#2E403B',
    fontSize: 24,
  },
  categorySubCount: {
    color: 'rgba(46, 64, 59, 0.5)',
    fontSize: 12,
  },
});

export default class MainPage extends React.Component {
  // getBooks = () => {
  //   return fetch('http://127.0.0.1:8000/api/booksList')
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({BOOKS: json.data, loading: false});
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };
  // state = {
  //   loading: true,
  //   BOOKS : {},
  // }
  // tmp = this.getBooks();

  render() {
    // if(this.state.loading){
    //   return null;
    // }
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={styles.profileContainer}>
                <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                <View>
                  <View style={styles.profileMessageContainer}>
                    <Text style={styles.profileMessage}>صبحت بخیر!</Text>
                    <FontAwesomeIcon icon={faSun} color='#2E403B' />
                  </View>
                  <Text style={styles.profileName}>{'علیرضا پقه'}</Text>
                </View>
              </View>
              <View style={styles.clickToGo}>
                <View style={styles.clickToGoIconContainer}>
                  <FontAwesomeIcon icon={faCirclePlay} size={72} color='#fff' />
                </View>
                <View style={styles.clickToGoDetails}>
                  <Text style={styles.clickToGoTitle}>بزن بریم!</Text>
                  <Text style={styles.clickToGoCategory}>{'آنمی همولیتیک'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.playGround}>
              <Text style={styles.playGroundTitle}>{'دسته بندی '}</Text>
              <View style={styles.categoryContainer}>
                {books.map(book => (
                  <View style={[styles.category]} key={book.id}>
                    <Image source={profileImage} resizeMode='contain' style={{ width: '50%', height: '50%' }} />
                    <Text style={styles.categoryName}>{`${book.name}`}</Text>
                    <Text style={styles.categorySubCount}>{book.chapters_count} درس</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
