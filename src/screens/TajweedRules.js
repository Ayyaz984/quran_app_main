import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {scale} from '../components/scale/Scale';

const TajweedRules = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/images/tajweed_rules.jpg')}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    transform: [{scaleY: scale(1.19)}],
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginTop: scale(-27),
  },
});

export default TajweedRules;
