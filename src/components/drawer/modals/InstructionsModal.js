import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {hideInstructionModal} from '../../../redux/features/StaticModalSlice';

const InstructionsModal = () => {
  const dispatch = useDispatch();
  const StaticModalState = useSelector(state => state.StaticModal);

  return (
    <Modal isVisible={StaticModalState.instructionShow}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideInstructionModal())}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Instructions</Text>
        <View>
          <Text style={styles.para}>1. View Menu</Text>
          <Text style={{fontSize: 14, color: '#000000', marginLeft: 20}}>
            Swipe your figner from left to right on your screen or click on{' '}
            <Ionicons name="menu" size={25} color="#000000" /> to view the menu.
          </Text>
        </View>

        <View>
          <Text style={styles.para}>2. Bookmarks</Text>
          <Text style={{fontSize: 14, color: '#000000', marginLeft: 20}}>
            Tap the <Ionicons name="bookmark" size={25} color="#000000" />
            button to save a page to bookmarks.
          </Text>
        </View>

        <View>
          <Text style={styles.para}>3. Favorites</Text>
          <Text style={{fontSize: 14, color: '#000000', marginLeft: 20}}>
            Frequently read pages or surah's aan be saved to favorites by
            tapping <Ionicons name="star" size={25} color="#000000" />
          </Text>
        </View>
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
    fontSize: 16,
    color: '#000000',
    fontWeight: '800',
    alignSelf: 'center',
    marginBottom: 20,
  },
  para: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '800',
    marginTop: 15,
  },
});

export default InstructionsModal;
