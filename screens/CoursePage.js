import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ChapterCard from '../components/ChapterCard';
import { COLORS, FONTS, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  playGround: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: SPACING.lg,
  },
  playGroundTitle: {
    ...FONTS.h1,
    color: COLORS.primaryDark,
    textAlign: 'right',
    marginBottom: SPACING.md,
  },
  subCategoryContainer: {
    gap: SPACING.md,
  },
});

export default class CoursePage extends React.Component {
  state = {
    loading: true,
    CHAPTERS: [],
  };

  componentDidMount() {
    // TODO: get book_id from navigation props
    this.getChapters(10);
  }

  getChapters = (book_id) => {
    fetch(`http://127.0.0.1:8000/api/chaptersList/${book_id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ CHAPTERS: json.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={styles.imageBg}>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <Header name="علیرضا پقه" />
              <View style={styles.playGround}>
                <Text style={styles.playGroundTitle}>{'فصل 1 دوازدهم'}</Text>
                <View style={styles.subCategoryContainer}>
                  {this.state.CHAPTERS.map((chapter) => (
                    <ChapterCard key={chapter.id} chapter={chapter} />
                  ))}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
