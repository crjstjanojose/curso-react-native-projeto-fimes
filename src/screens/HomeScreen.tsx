import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, isLoading, topRated, upcoming} = useMovies();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color="red" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 10}}>
        {/* Filmes Principais */}
        <View style={{height: 330}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={230}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Tops" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
