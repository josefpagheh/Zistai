import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import QuestionHeader from '../components/QuestionHeader';
import ProgressBar from '../components/ProgressBar';
import AnswerOption from '../components/AnswerOption';
import SelfEvaluation from '../components/SelfEvaluation';
import { COLORS, FONTS, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageBg: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  playGround: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: SPACING.lg,
    alignItems: 'center',
  },
  quizContainer: {
    width: '100%',
    flex: 1,
    gap: SPACING.lg,
  },
  questionContainer: {
    gap: SPACING.sm,
  },
  questionNumber: {
    ...FONTS.body2,
    color: COLORS.darkGray,
    textAlign: 'right',
  },
  questionText: {
    ...FONTS.h2,
    color: COLORS.primaryDark,
    textAlign: 'right',
  },
  answersContainer: {
    gap: SPACING.sm,
  },
});

export default class QuestionPage extends React.Component {
  state = {
    QUESTIONS: {},
    loadingQuestions: true,
    totalQuestionCount: 0,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    isAnsweredOptionId: null,
    active_time_start: 0,
    non_active_time_start: 0,
  };

  componentDidMount() {
    this.getQuestions(50, 1379);
  }

  getQuestions = (book_id, chapter_id) => {
    return fetch(`http://127.0.0.1:8000/api/getQuestionsForReview1`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          QUESTIONS: json,
          loadingQuestions: false,
          totalQuestionCount: json.length,
          active_time_start: new Date().getTime(),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  checkAnswer = (answer) => {
    this.setState({
      answered: true,
      isAnsweredOptionId: answer.id,
      answerCorrect: answer.correct,
      non_active_time_start: new Date().getTime(),
    });
  };

  fetchAnswer = (data) => {
    fetch('http://127.0.0.1:8000/api/checkAnswer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  nextQuestion = (self_evaluation) => {
    const end_time = new Date().getTime();
    const active_time = this.state.non_active_time_start - this.state.active_time_start;
    const non_active_time = end_time - this.state.non_active_time_start;
    this.fetchAnswer({
      question_id: this.state.QUESTIONS[this.state.activeQuestionIndex].id,
      is_correct: this.state.answerCorrect,
      self_evaluation: self_evaluation,
      active_time: active_time,
      non_active_time: non_active_time,
      user_id: '1',
    });

    this.setState((state) => {
      let nextActiveQuestionIndex = state.activeQuestionIndex + 1;
      if (nextActiveQuestionIndex > state.totalQuestionCount - 1) {
        nextActiveQuestionIndex = 0;
      }
      return {
        activeQuestionIndex: nextActiveQuestionIndex,
        answered: false,
        answerCorrect: false,
        isAnsweredOptionId: null,
        active_time_start: new Date().getTime(),
      };
    });
  };

  render() {
    if (this.state.loadingQuestions) {
      return null;
    }
    const question = this.state.QUESTIONS[this.state.activeQuestionIndex];
    const progress = ((this.state.activeQuestionIndex + 1) / this.state.totalQuestionCount) * 100;

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={styles.imageBg}>
          <SafeAreaView style={styles.safeArea}>
            <QuestionHeader progress={`${this.state.activeQuestionIndex + 1}/${this.state.totalQuestionCount}`} time="00:12" />
            <View style={styles.playGround}>
              <ProgressBar progress={progress} />
              <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={styles.quizContainer}>
                  <View style={styles.questionContainer}>
                    <Text style={styles.questionNumber}>سوال {this.state.activeQuestionIndex + 1} از {this.state.totalQuestionCount}.</Text>
                    <Text style={styles.questionText}>{question.text}</Text>
                  </View>
                  <View style={styles.answersContainer}>
                    {question.answers.map((answer) => (
                      <AnswerOption
                        key={answer.id}
                        answer={answer}
                        onPress={this.checkAnswer}
                        answered={this.state.answered}
                        isSelected={this.state.isAnsweredOptionId === answer.id}
                      />
                    ))}
                  </View>
                  {this.state.answered && <SelfEvaluation onSelect={this.nextQuestion} />}
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
