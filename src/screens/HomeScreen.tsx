import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import {GradientContext} from '../context/GradientContext';
import {getImageColors} from '../helpers/getColors';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, isLoading, topRated, upcoming} = useMovies();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const poster = nowPlaying[index].poster_path;
    const uri = `https://image.tmdb.org/t/p/w500${poster}`;

    const [primary = '#084f6a', secondary = '#58c1d1'] = await getImageColors(
      uri,
    );

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color="red" />
      </View>
    );
  }

  return (
    <GradientBackground>
      <View style={{marginTop: top + 10}}>
        <ScrollView>
          {/* Filmes Principais */}
          <View style={{height: 330}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={230}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Tops" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </ScrollView>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
