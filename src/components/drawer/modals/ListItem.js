import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {pageChange} from '../../../redux/features/PdfSlice';
import {scale} from '../../scale/Scale';

const ListItem = ({item, index}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => {}}>
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
};

const styles = StyleSheet.create({
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
  labelArabic: {fontSize: scale(14), color: '#076C58'},
});

export default ListItem;
