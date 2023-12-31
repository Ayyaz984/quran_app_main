import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getChapterById, getSurahByPage} from '../../../utils/Helpers';
import {
  hideFavoriteModal,
  removeFavorite,
} from '../../../redux/features/FavoritesSlice';
import {pageChange} from '../../../redux/features/PdfSlice';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../scale/Scale';

const FavoritesModal = ({pdfRef}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const FavoritesState = useSelector(state => state.Favorites);

  return (
    <Modal isVisible={FavoritesState.show}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideFavoriteModal())}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Your favorites</Text>
        <FlatList
          data={FavoritesState.favorites}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={styles.divider}></View>}
          ListEmptyComponent={() => (
            <View>
              <Text style={{color: '#000000'}}>
                You don't have any favorites.
              </Text>
            </View>
          )}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 7,
              }}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(pageChange({pageNo: item, pdfRef: pdfRef}));
                  navigation.closeDrawer();
                  dispatch(hideFavoriteModal());
                }}>
                <Text style={styles.title}>
                  {index + 1}. {getChapterById(item).chapterLabel || 'Juz 1'} -{' '}
                  {getSurahByPage(item).surahLabel}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => dispatch(removeFavorite(item))}>
                <Text style={[styles.title, {marginRight: 10}]}>{item}</Text>
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
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '700',
    marginBottom: 20,
  },
  title: {
    fontSize: scale(14),
    fontWeight: '700',
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D8D8',
    marginBottom: 7,
  },
});

export default FavoritesModal;
