import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Pressable, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faCirclePlay, faCircleXmark, faClose, faStopwatch, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFaceAngry, faFaceDizzy, faFaceLaugh, faFaceLaughBeam, faFaceLaughWink, faFaceSmile } from '@fortawesome/free-regular-svg-icons'

import profileImage from '../assets/logo.png';
import { Animated, TextInput } from 'react-native-web';
import MainHeader from '../components/MainHeader'


const screen = Dimensions.get('window');
const playGroundSize = screen.height * .8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80BCBD',
    backgroundColor: '#77BFA3',
    fontFamily: 'IRANSans'

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
  headerContainer: {
    // justifyContent: 'flex-start',
    // height: 100,
    // flex: 1,
    // height: screen.height *.5,
    // marginTop: 0,
    // paddingTop: 50,
    // alignItems: 'center',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: '#ccc'
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 4,
    // backgroundColor: '#999'
  },
  playGround: {
    backgroundColor: '#fff',
    flex: 1,
    // flexGrow: 1,
    // height: screen.height * .45  ,
    // minHeight: 150,
    // height: 150,

    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 0,
    // marginHorizontal: 15,
    // marginBottom: 15,
    // borderRadius: 20,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: 16,
    // gap: 16,
    // alignItems: 'center',
    // direction: 'rtl',
  },
  playGroundMargin: {
    margin: 8,
    borderRadius: 32,
  },
  QuestionProgressBar: {
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: '#FF8FA2',
    marginBottom: 24,
  },
  quizContainer: {
    // backgroundColor: '#999',
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
    alignItems: 'stretch',
    gap: 24,
    // direction: 'rtl'
  },
  questionContainer: {
    alignItems: 'stretch',
    // textAlign: 'left',
    // alignSelf: 'stretch',
    // width: '100%',
    gap: 8,
  },
  questionNumber: {
    fontSize: 16,
    color: '#81887D',
    // backgroundColor: '#999',
    textAlign: 'right',
    marginBottom: 8
  },
  questionText: {
    // width: '100%',
    fontSize: 18,
    // backgroundColor: '#999',
    // alignSelf: 'stretch',
    // alignContent: 'center',
    // alignItems: 'flex-start',
    textAlign: 'right',
    // direction: 'ltr',
    // textAlign: '',
    color: 'rgba(22, 41, 42, 1)',
    fontWeight: '600',
    fontFamily: 'IRANSans'

    // direction: 'rtl'
  },
  answersConatiner: {
    // alignSelf: 'stretch',
    gap: 8,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    // textAlign: 'right',
    // direction: 'rtl',
    // backgroundColor: '#999',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'rgba(154,176,166,.4)',
    gap: 8,
    // alignSelf: 'stretch',
  },
  falseAnswerContainer: {
    // borderWidth: 2,
    borderColor: 'rgba(206, 111, 76, .65)',
  },
  falseAnswerText: {
    color: '#CE6F4C',
  },
  trueAnswerContainer: {
    backgroundColor: '#77BFA3',
    borderWidth: 0,
    shadowColor: 'rgba(22, 41, 42, 0.8)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    // shadowOffset: 0,
    shadowRadius: 3,
    elevation: 5,
  },
  trueAnswerText: {
    color: 'rgba(255,255,255, .9)',
    // fontWeight: '500',
  },
  answerText: {
    fontSize: 18,
    // backgroundColor: '#999',
    // width: '100%',
    flex: 1,
    textAlign: 'right',
    color: 'rgba(0,0,0, .8)',
    fontFamily: 'IRANSans'

    // alignSelf: 'stretch',
  },
  playGroundTitle: {
    color: 'rgba(22, 41, 42, 0.7)',
    fontSize: 26,
    fontWeight: '500',
    paddingBottom: 20,
    // backgroundColor: '#ccc',
    // textAlign: 'right'
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
  nextButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // border: 999,
    aspectRatio: 1.5,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  leftNextButton: {
    width: '32%',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    marginRight: '-8%',
    paddingRight: '4%'
  },
  middleNextButton: {
    // flex: 1,
    width: '48%',
    borderWidth: 2,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#fff',
    zIndex: 2,
    // backgroundColor: '#999',

  },
  rightNextButton: {
    width: '32%',
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    marginLeft: '-8%',
    paddingLeft: '4%'
  }







});
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TempData from ''
const Stack = createNativeStackNavigator();

export default class QuestionPage extends React.Component {
  // fadeAnim = useRef(new Animated.Value(0)).current;

  state = {
    QUESTIONS : {},
    loadingQuestions: true,
    totalQuestionCount: 0,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    isAnsweredOptionId: null,
    active_time_start : 0,
    non_active_time_start : 0,
  };
  checkAnswer = (answer) => {
    this.setState(state => {
      // alert(Element.key)
      const nextState = {answered: true, isAnsweredOptionId: answer.id, non_active_time_start: new Date().getTime()};
      if(answer.correct) {
        nextState.answerCorrect = true;
      }else{
        nextState.answerCorrect = false;
      }
      return nextState;
    });
  }
  fetchAnswer = (data) => {
    // console.log(non_active_time);
    fetch('http://127.0.0.1:8000/api/checkAnswer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
      // this.setState({QUESTIONS: json, loadingQuestions: false, totalQuestionCount: json.length});
    })
    .catch(error => {
      console.error(error);
    });
  }
  calcTimesAndFetch = (self_evaluation) => {
    const end_time = new Date().getTime();
    const active_time = this.state.non_active_time_start - this.state.active_time_start;
    const non_active_time = end_time - this.state.non_active_time_start;
    this.fetchAnswer({'question_id': this.state.QUESTIONS[this.state.activeQuestionIndex].id, 'is_correct': this.state.answerCorrect, 'self_evaluation': self_evaluation, 'active_time': active_time, 'non_active_time': non_active_time, 'user_id': '1'});

  }
  nextQuestion = (self_evaluation) => {
   this.calcTimesAndFetch(self_evaluation);

    this.setState(state => {
      let nextActiveQuestionIndex = state.activeQuestionIndex + 1;
      if (nextActiveQuestionIndex > state.totalQuestionCount-1) {
        nextActiveQuestionIndex = 0;
      }
      // fadeIn();
      // let nextState = {}


      // console.log(active_time);
      // console.log(non_active_time);

      return {
        activeQuestionIndex: nextActiveQuestionIndex,
        answered: false,
        answerCorrect: false,
        isAnsweredOptionId: null,
        active_time_start: new Date().getTime(),
      };
      // return nextState;
    })
  }
  getQuestions = (book_id, chapter_id) => {
      return fetch(`http://127.0.0.1:8000/api/getQuestionsForReview1`)
      .then(response => response.json())
      .then(json => {
        // console.log(response[0]);
        this.setState({QUESTIONS: json, loadingQuestions: false, totalQuestionCount: json.length, active_time_start: new Date().getTime()});
      })
      .catch(error => {
        console.error(error);
      });
  };

  TempData = this.getQuestions(50, 1379);

  render() {
    if(this.state.loadingQuestions){
      return null;
    }
    const question = this.state.QUESTIONS[this.state.activeQuestionIndex];
    // console.log(question);
    // [this.state.activeQuestionIndex];
    // this.TempData.then(res => {console.log(res)})

    // const containerStyle = [styles.answerContainer]
    // if(answered )
    // return null;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} >
          <SafeAreaView  edges={{ top: 'additive', right: 'EdgeMode', bottom: 'EdgeMode', left: 'EdgeMode' }} style={{flex: 1, justifyContent: 'flex-start'}}>
            {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
                {/* <Stack.screen/> */}
                <View style={styles.headerContainer}>
                    <View>
                        <FontAwesomeIcon icon={faClose} size={32} color='rgba(0,0,0,.5)'/>
                    </View>
                    <View>
                        <Text>{'Progress Bar'}</Text>
                    </View>
                    <View style={styles.timerContainer}>
                        <FontAwesomeIcon icon={faStopwatch} size={16} color='rgba(0,0,0,0.5)' />
                        <Text>00:12</Text>
                    </View>
                   {/* {questions.map(q => (
                      <Text>{q.json}</Text>
                   ))} */}
                </View>
                <View style={[styles.playGround, styles.playGroundMargin]}>

                {/* <View style={{alignItems:'center', padding: 15,width: '100%'}} > */}
                    <View style={styles.QuestionProgressBar}></View>
                    <View style={styles.quizContainer}>
                      <View style={styles.questionContainer}>
                          <Text style={styles.questionText}>{question.text}</Text>
                      </View>
                      <View style={styles.answersConatiner}>
                          {question.answers.map(answer => (
                            // <View style={[styles.answerContainer]}>
                            this.state.answered ? (
                              answer.correct ? (
                                <View key={answer.id} style={[styles.answerContainer, (styles.trueAnswerContainer)]} onPress={() => {this.checkAnswer(answer)}}>
                                  <FontAwesomeIcon icon={(faCheck )} size={32} color={'rgba(255,255,255, .9)'} />
                                  <Text style={[styles.answerText, (styles.trueAnswerText)]}>{answer.text}</Text>
                                </View>
                              ) : (
                                <View key={answer.id} style={[styles.answerContainer, (answer.id == this.state.isAnsweredOptionId && styles.falseAnswerContainer)]} onPress={() => {}}>
                                {/* , (answer.id == this.state.isAnsweredOptionId && styles.falseAnswerContainer) */}
                                  {answer.id == this.state.isAnsweredOptionId && <FontAwesomeIcon icon={(faClose )} size={32} color={'#CE6F4C'} />}
                                  <Text style={[styles.answerText, (answer.id == this.state.isAnsweredOptionId && styles.falseAnswerText)]}>{answer.text}</Text>
                                </View>
                              )

                            ) : (
                              <Pressable key={answer.id} style={[styles.answerContainer]} onPress={() => this.checkAnswer(answer)}>
                                <Text style={styles.answerText}>{answer.text}</Text>
                              </Pressable>
                            )

                            // </View>
                          ))}

                          {/* <View style={[styles.answerContainer, styles.trueAnswerContainer]}>
                              <FontAwesomeIcon icon={faCheck} size={32} color='rgba(255,255,255, .9)' />

                              <Text style={[styles.answerText, styles.trueAnswerText]}>از مکزیک به کانادا کانادا کانادا کانادا کانادا کاناداکاناداکانادا کانادا</Text>
                          </View>
                          <View style={[styles.answerContainer, styles.falseAnswerContainer]}>
                              <FontAwesomeIcon icon={faClose} size={32} color='#CE6F4C' />

                              <Text style={[styles.answerText, styles.falseAnswerText]}>از مکزیک به کانادا</Text>
                          </View> */}
                      </View>
                      {this.state.answered && (
                       <View style={[styles.nextButtonContainer]}>
                          <Pressable style={[styles.nextButton, styles.leftNextButton]} onPress={() => this.nextQuestion(1)}>
                              <FontAwesomeIcon icon={faFaceLaughWink} size={50} color='#6583DA'/>
                          </Pressable>
                          <Pressable style={[styles.nextButton, styles.middleNextButton]} onPress={() => this.nextQuestion(2)}>
                              <FontAwesomeIcon icon={faFaceSmile} size={'50%'} color='#77BFA3'/>
                          </Pressable>
                          <Pressable style={[styles.nextButton, styles.rightNextButton]} onPress={() => this.nextQuestion(3)}>
                              <FontAwesomeIcon icon={faFaceDizzy} size={'50%'} color='#CD704D'/>
                          </Pressable>
                      </View>
                      )}

                    </View>
                    <Text style={styles.questionNumber}>سوال {this.state.activeQuestionIndex+1} از {this.state.totalQuestionCount}.</Text>
                {/* </View>  */}
                </View>
            {/* </ScrollView> */}
          </SafeAreaView>
        </ImageBackground>

      </View>
    );
  }

}

// export default entryPage;
