import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';

const screen = Dimensions.get('window');

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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default class MainPage extends React.Component {
  state = {
    loading: true,
    BOOKS: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    fetch('http://127.0.0.1:8000/api/booksList')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ BOOKS: json.data, loading: false });
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
                <Text style={styles.playGroundTitle}>{'دسته بندی '}</Text>
                <View style={styles.categoryContainer}>
                  {this.state.BOOKS.map((book) => (
                    <CategoryCard key={book.id} category={book} />
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
