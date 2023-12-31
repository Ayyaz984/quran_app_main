import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setFavorite} from '../../redux/features/FavoritesSlice';
import {setBookmark} from '../../redux/features/BookmarkSlice';

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const PdfState = useSelector(state => state.Pdf);
  const FavoritesState = useSelector(state => state.Favorites);
  const BookmarkState = useSelector(state => state.Bookmarks);

  return (
    <View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.fav}>
        <TouchableOpacity
          onPress={() => dispatch(setBookmark(PdfState.lastOpnedPage))}>
          <Ionicons
            name={
              BookmarkState.bookmarks.indexOf(PdfState.lastOpnedPage) > -1
                ? 'bookmark'
                : 'bookmark-outline'
            }
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setFavorite(PdfState.lastOpnedPage))}
          style={{marginTop: 15}}>
          <Ionicons
            name={
              FavoritesState.favorites.indexOf(PdfState.lastOpnedPage) > -1
                ? 'star'
                : 'star-outline'
            }
            size={30}
            color="#000000"
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
