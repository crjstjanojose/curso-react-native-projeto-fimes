import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{height: 50, width: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorPerson}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 10,
    marginRight: 10,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorPerson: {
    fontSize: 16,
  },
});
