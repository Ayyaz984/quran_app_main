import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {hideAboutModal} from '../../../redux/features/StaticModalSlice';
import {scale} from '../../scale/Scale';

const AboutUsModal = () => {
  const dispatch = useDispatch();
  const StaticModalState = useSelector(state => state.StaticModal);
  return (
    <Modal isVisible={StaticModalState.aboutShow}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => dispatch(hideAboutModal())}>
          <Ionicons name="close" size={25} color="#000000" />
        </TouchableOpacity>

        <Text style={styles.modalTitle}>About Us</Text>
        <View>
          <Text style={styles.para}>
            In the name of Allah, The merciful, the merciful.
          </Text>
          <Text style={styles.para}>
            The Uloom Quran app is presented to you for reading 15 lines Quran
            in color code.
          </Text>
          <Text style={styles.para}>
            I ask that yo make dua for the developers of this app and those who
            contributed financially and the other forms of support to help
            create it.
          </Text>
          <Text style={styles.para}>
            "The best amongest you is the onw who learns the Quran and teaches
            it."
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
    alignSelf: 'center',
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '700',
    marginBottom: 20,
  },
  para: {
    fontSize: scale(12),
    color: '#000000',
    fontWeight: '400',
    marginVertical: 15,
  },
});

export default AboutUsModal;
