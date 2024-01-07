import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useMemo} from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {chapters} from '../../../constants/Chapters';
import {useDispatch, useSelector} from 'react-redux';
import {pageChange} from '../../../redux/features/PdfSlice';
import {useNavigation} from '@react-navigation/native';
import {hideChapterModal} from '../../../redux/features/ChapterSlice';
import {scale} from '../../scale/Scale';

const ChapterModal = ({pdfRef}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ChapterSlice = useSelector(state => state.Chapters);

  const chaptersList = useMemo(() => {
    return chapters;
  }, []);

  const _renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(pageChange({pageNo: item.pageStart, pdfRef: pdfRef}));
          dispatch(hideChapterModal());
          navigation.closeDrawer();
        }}>
        <View style={styles.contentBox}>
          <View style={styles.listNumber}>
            <Text style={{color: '#FFFFFF'}}>{index + 1}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.titleEng}>{item.labelEng}</Text>
            </View>
            <View>
              <Text style={styles.titleAra}>{item.labelAra}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <Modal isVisible={ChapterSlice.show}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideChapterModal())}>
          <Ionicons name="close" size={scale(25)} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Choose your chapter</Text>
        <FlatList
          data={chaptersList}
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
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '700',
    marginBottom: 20,
  },
  title: {
    fontSize: scale(14),
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
    // backgroundColor: '#513204',
    backgroundColor: '#A36527',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemContainer: {
    width: Dimensions.get('window').width - 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleEng: {
    fontSize: scale(14),
    color: '#000000',
    fontWeight: '500',
  },
  subTitle: {color: 'grey', fontSize: scale(10), marginRight: 2},
  titleAra: {color: '#076C58', fontSize: scale(26)},
  contentList: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 112,
    height: 36,
    justifyContent: 'center',
  },
  labelEnglish: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelArabic: {
    fontSize: scale(16),
    fontWeight: '800',
    color: '#076C58',
    marginRight: 20,
  },
});

export default ChapterModal;
