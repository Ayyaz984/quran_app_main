import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {SetAppFirstLoad} from '../redux/features/AppLoadFirstSlice';

const OnBoarding = () => {
  const dispatch = useDispatch();

  const Done = ({...props}) => {
    return (
      <TouchableOpacity {...props}>
        <Text style={{color: 'white', marginRight: 15, fontSize: 16}}>
          Done
        </Text>
      </TouchableOpacity>
    );
  };

  const Dots = ({selected}) => {
    return (
      <View
        style={{
          width: selected ? 25 : 5,
          height: 5,
          backgroundColor: selected ? 'green' : 'white',
          marginHorizontal: 3,
          borderRadius: 5,
        }}
      />
    );
  };
  return (
    <OnboardingSwiper
      DoneButtonComponent={Done}
      onDone={() => dispatch(SetAppFirstLoad(false))}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: '#001C18',
          image: (
            <Image
              source={require('../assets/images/quran.png')}
              resizeMode="contain"
            />
          ),
          title: 'View Menu',
          subtitle: (
            <View>
              <Text
                style={{
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                Swipe your figner from left to right on your screen or click on{' '}
                <Ionicons name="menu" size={25} color={'white'} /> to view the
                menu
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#001C18',
          image: (
            <Image
              source={require('../assets/images/quran.png')}
              resizeMode="contain"
            />
          ),
          title: 'Bookmarks',
          subtitle: (
            <View>
              <Text
                style={{
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                Tap the <Ionicons name="bookmark" size={25} color={'white'} />
                button to save a page to bookmarks
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#001C18',
          image: <Image source={require('../assets/images/quran.png')} />,
          title: 'Favorites',
          subtitle: (
            <View>
              <Text
                style={{
                  color: 'white',
                  marginHorizontal: 20,
                }}>
                Frequently read pages or surah's aan be saved to favorites by
                tapping <Ionicons name="star" size={25} color={'white'} />
              </Text>
            </View>
          ),
        },
      ]}
    />
  );
};

export default OnBoarding;
