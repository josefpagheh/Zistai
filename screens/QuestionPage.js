import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faClose, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faFaceDizzy, faFaceLaughWink, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { questions } from '../data/sample/questions';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
  },
  headerContainer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  playGround: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: 16,
  },
  QuestionProgressBar: {
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: '#A2D9A2',
    marginBottom: 24,
  },
  quizContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    gap: 24,
  },
  questionContainer: {
    alignItems: 'stretch',
    gap: 8,
  },
  questionNumber: {
    fontSize: 16,
    color: 'rgba(46, 64, 59, 0.5)',
    textAlign: 'right',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'right',
    color: '#2E403B',
    fontWeight: '600',
  },
  answersConatiner: {
    gap: 8,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'rgba(162, 217, 162, 0.4)',
    gap: 8,
  },
  falseAnswerContainer: {
    borderColor: 'rgba(206, 111, 76, .65)',
  },
  falseAnswerText: {
    color: '#CE6F4C',
  },
  trueAnswerContainer: {
    backgroundColor: '#6AC46A',
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  trueAnswerText: {
    color: '#fff',
  },
  answerText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
    color: '#2E403B',
  },
  nextButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.5,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  leftNextButton: {
    width: '32%',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    marginRight: '-8%',
    paddingRight: '4%',
  },
  middleNextButton: {
    width: '48%',
    borderWidth: 2,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  rightNextButton: {
    width: '32%',
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    marginLeft: '-8%',
    paddingLeft: '4%',
  },
});

export default class QuestionPage extends React.Component {
  state = {
    QUESTIONS: questions,
    totalQuestionCount: questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    isAnsweredOptionId: null,
  };

  checkAnswer = (answer) => {
    this.setState(state => {
      const nextState = { answered: true, isAnsweredOptionId: answer.id };
      if (answer.correct) {
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
      }
      return nextState;
    });
  }

  nextQuestion = () => {
    this.setState(state => {
      let nextActiveQuestionIndex = state.activeQuestionIndex + 1;
      if (nextActiveQuestionIndex > state.totalQuestionCount - 1) {
        nextActiveQuestionIndex = 0;
      }
      return {
        activeQuestionIndex: nextActiveQuestionIndex,
        answered: false,
        answerCorrect: false,
        isAnsweredOptionId: null,
      };
    })
  }

  render() {
    const question = this.state.QUESTIONS[this.state.activeQuestionIndex];
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faClose} size={32} color='#2E403B' />
            </TouchableOpacity>
            <View>
              <Text style={{ color: '#2E403B' }}>Progress Bar</Text>
            </View>
            <View style={styles.timerContainer}>
              <FontAwesomeIcon icon={faStopwatch} size={16} color='#2E403B' />
              <Text style={{ color: '#2E403B' }}>00:12</Text>
            </View>
          </View>
          <View style={styles.playGround}>
            <View style={styles.QuestionProgressBar}></View>
            <ScrollView style={{ width: '100%' }}>
              <View style={styles.quizContainer}>
                <View style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                </View>
                <View style={styles.answersConatiner}>
                  {question.answers.map(answer => (
                    this.state.answered ? (
                      answer.correct ? (
                        <View key={answer.id} style={[styles.answerContainer, (styles.trueAnswerContainer)]}>
                          <FontAwesomeIcon icon={(faCheck)} size={32} color={'#fff'} />
                          <Text style={[styles.answerText, (styles.trueAnswerText)]}>{answer.text}</Text>
                        </View>
                      ) : (
                        <View key={answer.id} style={[styles.answerContainer, (answer.id == this.state.isAnsweredOptionId && styles.falseAnswerContainer)]}>
                          {answer.id == this.state.isAnsweredOptionId && <FontAwesomeIcon icon={(faClose)} size={32} color={'#CE6F4C'} />}
                          <Text style={[styles.answerText, (answer.id == this.state.isAnsweredOptionId && styles.falseAnswerText)]}>{answer.text}</Text>
                        </View>
                      )
                    ) : (
                      <Pressable key={answer.id} style={[styles.answerContainer]} onPress={() => this.checkAnswer(answer)}>
                        <Text style={styles.answerText}>{answer.text}</Text>
                      </Pressable>
                    )
                  ))}
                </View>
                {this.state.answered && (
                  <View style={[styles.nextButtonContainer]}>
                    <Pressable style={[styles.nextButton, styles.leftNextButton]} onPress={() => this.nextQuestion(1)}>
                      <FontAwesomeIcon icon={faFaceLaughWink} size={50} color='#6AC46A' />
                    </Pressable>
                    <Pressable style={[styles.nextButton, styles.middleNextButton]} onPress={() => this.nextQuestion(2)}>
                      <FontAwesomeIcon icon={faFaceSmile} size={'50%'} color='#A2D9A2' />
                    </Pressable>
                    <Pressable style={[styles.nextButton, styles.rightNextButton]} onPress={() => this.nextQuestion(3)}>
                      <FontAwesomeIcon icon={faFaceDizzy} size={'50%'} color='#CE6F4C' />
                    </Pressable>
                  </View>
                )}
              </View>
            </ScrollView>
            <Text style={styles.questionNumber}>سوال {this.state.activeQuestionIndex + 1} از {this.state.totalQuestionCount}.</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
