import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userRoll = useSelector((state: any) => state.settingReducer.userRoll);
  return (
    <View>
      <Text>userRoll: {userRoll}</Text>
    </View>
  );
};

export default Profile;
