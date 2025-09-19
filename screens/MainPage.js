import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Pressable, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlay, faSun } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../assets/logo.png';
import { TextInput, TouchableOpacity } from 'react-native-web';
import MainHeader from '../components/MainHeader'
import { books } from '../data/sampleData';


const screen = Dimensions.get('window');
const playGroundSize = screen.height * .8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80BCBD',
    backgroundColor: '#77BFA3'
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',

  },
  playGround: {
    backgroundColor: '#fff',
    // flex: 1,
    // height: screen.height * .45  ,
    // minHeight: 150,
    // height: 150,

    justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 0,
    // marginHorizontal: 15,
    // marginBottom: 15,
    // borderRadius: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  logoConatainer: {
    // justifyContent: 'center',
    alignItems: 'center',

  },
  logoImage: {
    width: 60,
    height: 60,
    // backgroundColor: '#fff'
  },
  logoText: {
      marginTop: 1,
      color: '#fff',
      fontSize: 26,
      fontWeight: 500,
      // fontFamily: 'Nunito'
  },
  IllustrationContainer: {
    // flexGrow: 1,
    // backgroundColor: '#555',

    // width: '100%',
    flex: 1,
    // height: '100%',
  },
  illustrationImage: {
    flex: 1,
    width: '100%',
    // height: undefined,
  },
  playGroundTitle: {
    color: 'rgba(22, 41, 42, 0.7)',
    fontSize: 26,
    fontWeight: '500',
    paddingBottom: 20,
    // backgroundColor: '#ccc',
    textAlign: 'right'
  },
  shadeText: {
    color: '#81887D',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 25,
  },
  button: {
    width: '100%',
    // backgroundColor: '#80BCBD',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 20,
    marginBottom: 18,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  },
  headerContainer: {
    // justifyContent: 'flex-start',
    // height: 1000,
    // flex: 1,
    // height: screen.height *.5,
    // marginTop: 0,
    // paddingTop: 50,
    // alignItems: 'center',
    padding: 25,
    // backgroundColor: '#ccc'
  },
  clickToGo: {
    // backgroundColor: '#fff',
    // opacity: 0.8,
    backgroundColor: '#C57755',
    borderRadius: 20,
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100
    // F9F7C9
  },
  clickToGoDetails: {
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  clickToGoTitle: {
    // color: '#f5f5f5',
    textAlign: 'right',
    color: '#fff',
    fontSize: 16,
  },
  clickToGoCategory: {
    color: '#fff',
    // color: '#f5f5f5',

    // marginTop: 5,
    fontSize: 24
  },
  clickToGoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#C57755',
    width: 100,
    height: 100,
    borderRightColor: 'rgba(0, 0, 0, 0.05)',
    borderRightWidth: 1,
  },
  clickToGoIcon: {
    color: '#fff',
    textAlign: 'center'
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 10,
    // backgroundColor: '#ccc'
  },
  profileImage: {
    borderRadius: 20,
    width: 50,
    height: 50
  },
  profileMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 2
  },
  profileMessage: {
    // alignItems: 'flex-start',
    // paddingRight: 0,
    // marginRight: 0,
    fontSize: 16,
    color: '#f5f5f5',
    textAlign: 'right',
    // backgroundColor: '#ccc'
  },
  profileName: {
    color: '#fff',
    fontSize: 30,
    marginTop: 5,
    marginBottom: 20,
    // backgroundColor: '#ccc'

  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 15,
  },
  category: {
    width: (screen.width - 30) * .45,
    height: (screen.width - 30) * .45,
    maxWidth: 150,
    maxHeight: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    // borderColor: '#BFD8BD',
    // borderWidth: 1,
    shadowColor: 'rgba(22, 41, 42, 0.8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    // shadowOffset: 0,
    shadowRadius: 3,
    elevation: 5,
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  },
  categoryName: {
    color: 'rgba(22, 41, 42, 0.8)',
    fontSize: 24,
  },
  categorySubCount: {
    color: 'rgba(22, 41, 42, 0.5)',
    fontSize: 12
  },



});
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} >
          <SafeAreaView  edges={{ top: 'additive', right: 'EdgeMode', bottom: 'EdgeMode', left: 'EdgeMode' }} style={{flex: 1, justifyContent: 'flex-start'}}>
            <ScrollView >
                {/* <Stack.screen/> */}
                <View style={styles.headerContainer}>
                    <View style={styles.profileContainer}>
                        <Image source={profileImage} resizeMode='contain' style={styles.profileImage}/>
                        <View>
                          <View style={styles.profileMessageContainer}>
                            <Text style={styles.profileMessage}>
                              صبحت بخیر!
                            </Text>
                            <FontAwesomeIcon icon={faSun} color='#f5f5f5' />
                          </View>
                          <Text style={styles.profileName}>{'علیرضا پقه'}</Text>
                        </View>
                    </View>
                    {/* <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} > */}
                    <View style={styles.clickToGo}>
                        <View style={styles.clickToGoIconContainer}>
                            <View style={styles.clickToGoIcon}>
                              <FontAwesomeIcon icon={faCirclePlay} size={72} color='#fff'/>
                              {/* <FontAwesomeIcon icon="square-check" /> */}
                            </View>
                        </View>
                        <View style={styles.clickToGoDetails}>
                            <Text style={styles.clickToGoTitle}>بزن بریم!</Text>
                            <Text style={styles.clickToGoCategory}>{'آنمی همولیتیک'}</Text>
                        </View>

                    </View>
                    {/* </ImageBackground> */}
                </View>
                <View style={styles.playGround}>

                {/* <View style={{alignItems:'center', padding: 15,width: '100%'}} > */}
                    <Text style={styles.playGroundTitle}>{'دسته بندی '}</Text>
                    <View style={styles.categoryContainer}>
                    {/* //88E2CE  A188E2 E2889C bdae80*/}
                        {books.map(book => (
                          <View style={[styles.category]} key={book.id}>
                            <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                            <Text style={styles.categoryName}>{`${book.name}`}</Text>
                            <Text style={styles.categorySubCount}>{book.chapters_count}درس</Text>
                          </View>
                        ))}

                        {/* <View style={[styles.category, {backgroundColor: ''}]}>
                            <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                            <Text style={styles.categoryName}>قلب</Text>
                            <Text style={styles.categorySubCount}>21 درس</Text>
                        </View> */}
                        {/* <View style={[styles.category, {backgroundColor: ''}]}>
                            <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                            <Text style={styles.categoryName}>قلب</Text>
                            <Text style={styles.categorySubCount}>21 درس</Text>
                        </View>    */}
                        {/* <View style={styles.category}>
                            <Image source={profileImage} resizeMode='contain' style={styles.profileImage} />
                            <Text style={styles.categoryName}>قلب</Text>
                            <Text style={styles.categorySubCount}>21 درس</Text>
                        </View>         */}
                    </View>

                {/* </View>  */}
                </View>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>

      </View>
    );
  }

}

// export default entryPage;
