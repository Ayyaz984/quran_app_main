import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getChapterById} from '../../../utils/Helpers';
import {removeFavorite} from '../../../redux/features/FavoritesSlice';
import {
  hideBookmarkModal,
  removeBookmark,
} from '../../../redux/features/BookmarkSlice';

const BookmarkModal = () => {
  const dispatch = useDispatch();
  const BookmarkState = useSelector(state => state.Bookmarks);
  console.log('Modal:', BookmarkState);

  return (
    <Modal isVisible={BookmarkState.show}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideBookmarkModal())}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Your bookmarks</Text>
        <FlatList
          data={BookmarkState.bookmarks}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={styles.divider}></View>}
          renderItem={({item, index}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{getChapterById(item)} - Surah Name</Text>
              {/* <Text style={{marginRight: 10}}>{item}</Text> */}
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => dispatch(removeBookmark(item))}>
                <Ionicons name="trash" size={25} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalTitle: {
    alignItems: 'center',
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D8D8',
    marginBottom: 7,
  },
});

export default BookmarkModal;
