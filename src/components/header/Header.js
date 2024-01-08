import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setFavorite} from '../../redux/features/FavoritesSlice';
import {setBookmark} from '../../redux/features/BookmarkSlice';
import {getSurahByPage} from '../../utils/Helpers';
import {scale} from '../scale/Scale';

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const PdfState = useSelector(state => state.Pdf);
  const FavoritesState = useSelector(state => state.Favorites);
  const BookmarkState = useSelector(state => state.Bookmarks);
  const HeaderState = useSelector(state => state.Header);

  return (
    <View
      style={{
        width: '100%',
        height: 50,
        alignItems: 'center',
        // backgroundColor: '#513204',
        backgroundColor: '#A36527',
        flexDirection: 'row',
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 1,
        opacity: 0.9,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '60%'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: scale(20),
            fontWeight: '600',
            color: '#ffffff',
            marginLeft: 7,
          }}>
          {getSurahByPage(PdfState.lastOpnedPage).surahLabelAra}
        </Text>
      </View>
      <View
        style={{
          width: '40%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => dispatch(setBookmark(PdfState.lastOpnedPage))}>
          <Ionicons
            name={
              BookmarkState.bookmarks.indexOf(PdfState.lastOpnedPage) > -1
                ? 'bookmark'
                : 'bookmark-outline'
            }
            size={30}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setFavorite(PdfState.lastOpnedPage))}>
          <Ionicons
            name={
              FavoritesState.favorites.indexOf(PdfState.lastOpnedPage) > -1
                ? 'star'
                : 'star-outline'
            }
            size={30}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  fav: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
export default Header;
