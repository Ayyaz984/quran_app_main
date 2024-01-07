import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
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
import {scale} from '../scale/Scale';

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
          style={styles.drawerItemContainer}
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="book" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => dispatch(showChapterModal())}
        />
        <DrawerItem
          label="Surah"
          style={styles.drawerItemContainer}
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="book" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => dispatch(showSurahModal())}
        />
        <DrawerItem
          label="Bookmarks"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="bookmark" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => dispatch(showBookmarkModal())}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="star" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => dispatch(showFavoriteModal())}
        />
        <DrawerItem
          label="Tajweed Rules"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="list" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => navigation.navigate('TajweedRules')}
        />
        <DrawerItem
          label="About us"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="information-circle" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => {
            dispatch(showAboutModal());
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Instructions"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="help" size={15} color="#FFFFFF" />
            </View>
          )}
          onPress={() => {
            dispatch(showInstructionModal());
            navigation.closeDrawer();
          }}
        />
        <DrawerItem
          label="Rate us on Play store"
          labelStyle={styles.itemLabel}
          style={styles.drawerItemContainer}
          icon={({focused, size, color}) => (
            <View style={styles.itemIcon}>
              <Ionicons name="create" size={15} color="#FFFFFF" />
            </View>
          )}
        />
        <Image
          source={require('../../assets/images/logo.jpg')}
          style={{
            height: 140,
            width: '100%',
            resizeMode: 'contain',
            marginTop: 15,
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.socialIcons}>
        <TouchableOpacity
          style={styles.socialIconStyle}
          onPress={() => Linking.openURL('https://www.google.com')}>
          <Ionicons name="globe-outline" size={25} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIconStyle}
          onPress={() => Linking.openURL('https://www.facebook.com')}>
          <Ionicons name="logo-facebook" size={25} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIconStyle}
          onPress={() => Linking.openURL('https://www.instagram.com')}>
          <Ionicons name="logo-instagram" size={25} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIconStyle}
          onPress={() => Linking.openURL('https://www.twitter.com')}>
          <Ionicons name="logo-twitter" size={25} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerItemContainer: {marginBottom: -7},
  itemLabel: {
    fontSize: scale(14),
    color: '#000000',
    fontWeight: '500',
    marginVertical: -10,
    marginLeft: -20,
  },
  itemIcon: {backgroundColor: '#A36527', padding: 5, borderRadius: 5},
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    borderTopColor: '#D9D8D8',
    borderTopWidth: 1,
  },
  socialIconStyle: {backgroundColor: '#A36527', borderRadius: 20, padding: 5},
});

export default CustomDrawerContent;
