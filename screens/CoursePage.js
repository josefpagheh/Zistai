import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../assets/logo.png';
import MainHeader from '../components/MainHeader'
import { chapters } from '../data/sample/chapters';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
  },
  main: {
    flex: 1,
    padding: 20,
  },
  playGroundTitle: {
    color: '#2E403B',
    fontSize: 26,
    fontWeight: '500',
    paddingBottom: 20,
    textAlign: 'right',
  },
  subCategoryContainer: {
    gap: 15,
  },
  subCategory: {
    width: '100%',
    flexDirection: 'row',
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
  subCategoryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  subCategoryDetailsText: {
    alignItems: 'flex-end',
    gap: 8,
  },
  subCategoryName: {
    color: '#2E403B',
    fontSize: 24,
  },
  subCategorySubCount: {
    color: 'rgba(46, 64, 59, 0.5)',
    fontSize: 12,
  },
  profileImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
  },
});

export default class CoursePage extends React.Component {
  // getChapters = (book_id) => {
  //   return fetch(`http://127.0.0.1:8000/api/chaptersList/${book_id}`)
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({CHAPTERS: json.data, loading: false});
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };
  // state = {
  //   loading: true,
  //   CHAPTERS : {},
  // }
  // tmp = this.getChapters(10);

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainHeader />
        <View style={styles.main}>
          <Text style={styles.playGroundTitle}>{'فصل 1 دوازدهم'}</Text>
          <ScrollView>
            <View style={styles.subCategoryContainer}>
              {chapters.map(chapter => (
                <View style={[styles.subCategory]} key={chapter.id}>
                  <FontAwesomeIcon icon={faAngleLeft} size={32} color='#2E403B' />
                  <View style={styles.subCategoryDetails}>
                    <View style={styles.subCategoryDetailsText}>
                      <Text style={styles.subCategoryName}>{chapter.name}</Text>
                      <Text style={styles.subCategorySubCount}>{chapter.question_count} سوال</Text>
                    </View>
                    <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
