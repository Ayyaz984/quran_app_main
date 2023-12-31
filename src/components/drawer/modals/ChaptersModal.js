import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {chapters} from '../../../constants/Chapters';
import ListItem from './ListItem';

const SurahModal = () => {
  return (
    <Modal isVisible={true}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Choose your chapter</Text>
        <FlatList
          data={chapters}
          keyExtractor={item => item.labelEng}
          ItemSeparatorComponent={() => <View style={styles.divider}></View>}
          renderItem={({item, index}) => <ListItem item={item} index={index} />}
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

export default SurahModal;
