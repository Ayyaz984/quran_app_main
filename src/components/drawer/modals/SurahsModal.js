import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {hideSurahModal} from '../../../redux/features/SurahSlice';
import {pageChange} from '../../../redux/features/PdfSlice';
import {useNavigation} from '@react-navigation/native';
import {surah} from '../../../constants/Surahs';

const SurahsModal = ({pdfRef}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const SurahState = useSelector(state => state.Surahs);

  const _renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          dispatch(hideSurahModal());
          dispatch(pageChange({pageNo: item.pageStart, pdfRef: pdfRef}));
        }}>
        <View style={styles.contentBox}>
          <View style={styles.listNumber}>
            <Text style={{color: '#FFFFFF'}}>{index + 1}</Text>
          </View>
          <View style={styles.contentList}>
            <View style={styles.labelEnglish}>
              <Text style={styles.title}>{item.labelEng}</Text>
              <Text style={styles.labelArabic}>{item.labelAra}</Text>
            </View>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal isVisible={SurahState.show}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideSurahModal())}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Choose your chapter</Text>
        <FlatList
          data={surah}
          keyExtractor={item => item.labelEng}
          ItemSeparatorComponent={() => <View style={styles.divider}></View>}
          renderItem={_renderItem}
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
  contentBox: {
    width: '100%',
    height: 60,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listNumber: {
    width: 36,
    height: 36,
    backgroundColor: '#87D1A4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentList: {
    marginLeft: 10,
    width: '83%',
  },
  labelEnglish: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelArabic: {fontSize: 14, color: '#076C58'},
});

export default SurahsModal;
