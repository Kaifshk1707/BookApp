import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserRole } from '../redux/reducers/ProfileReducer';

const Profile = () => {
  const dispatch = useDispatch();

  const userRole = useSelector((state) => state?.ProfileReducer?.userRole);

  const handleChangeRole = () => {
    dispatch(setUserRole(userRole === 'user' ? 'admin' : 'user'));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Current Role: {userRole}
      </Text>
      <Button title="Change Role" onPress={handleChangeRole} />
    </View>
  );
};

export default Profile;
