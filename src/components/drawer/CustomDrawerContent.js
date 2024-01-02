import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {showBookmarkModal} from '../../redux/features/BookmarkSlice';
import {showFavoriteModal} from '../../redux/features/FavoritesSlice';
import {showChapterModal} from '../../redux/features/ChapterSlice';
import {showSurahModal} from '../../redux/features/SurahSlice';
import {
  showAboutModal,
  showInstructionModal,
} from '../../redux/features/StaticModalSlice';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerContent = props => {
  const navigation = props.navigation;
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{height: 200, width: '100%'}}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{height: 200, width: '100%', marginTop: -4}}
          />
        </View>

        <DrawerItem
          label="Juz (Chapters)"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="book" size={25} color="#000000" />
          )}
          onPress={() => dispatch(showChapterModal())}
        />
        <DrawerItem
          label="Surah"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="book" size={25} color="#000000" />
          )}
          onPress={() => dispatch(showSurahModal())}
        />
        <DrawerItem
          label="Bookmarks"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="bookmark" size={25} color="#000000" />
          )}
          onPress={() => dispatch(showBookmarkModal())}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="star" size={25} color="#000000" />
          )}
          onPress={() => dispatch(showFavoriteModal())}
        />
        <DrawerItem
          label="Tajweed Rules"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="list" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="About us"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="information-circle" size={25} color="#000000" />
          )}
          onPress={() => {
            dispatch(showAboutModal());
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Instructions"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="help" size={25} color="#000000" />
          )}
          onPress={() => {
            dispatch(showInstructionModal());
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Rate us on Play store"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="create" size={25} color="#000000" />
          )}
        />
      </DrawerContentScrollView>
      <View style={styles.socialIcons}>
        <Ionicons name="globe-outline" size={25} color="#000000" />
        <Ionicons name="logo-facebook" size={25} color="#000000" />
        <Ionicons name="logo-instagram" size={25} color="#000000" />
        <Ionicons name="logo-twitter" size={25} color="#000000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    marginVertical: -10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },
});

export default CustomDrawerContent;
