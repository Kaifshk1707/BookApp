import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const userRole = useSelector((state) => state.searchReducer.role);

  return (
    <View>
      <Text>Profile</Text>
      <Text style={{ fontSize: 25, fontWeight: "600", color: "red" }}>
        {userRole ?? "No user role found"}
      </Text>
    </View>
  )
}

export default Profile