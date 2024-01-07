import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from '../scale/Scale';

const DrawerListItem = ({label, icon, dispatchFunc}) => {
  const dispatch = useDispatch();
  return (
    <DrawerItem
      label={label}
      labelStyle={styles.itemLabel}
      icon={({focused, size, color}) => (
        <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
          <Ionicons name={icon} size={15} color="#FFFFFF" />
        </View>
      )}
      onPress={() => dispatch(dispatchFunc())}
    />
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '700',
    marginVertical: -10,
    marginLeft: -20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },
});
export default DrawerListItem;
