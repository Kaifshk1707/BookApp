import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserRole } from '../store/Actions/profileAction';


const Profile = () => {
  const fetchRole = useSelector((state) => state?.adminRole?.role);
  const dispatch = useDispatch()

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "red", textAlign: "center" }}>
        Profile
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "600", color: "red", textAlign: "center", margin: 30 }}>
        {fetchRole}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(changeUserRole(fetchRole === "Owner" ? "Admin" : "Owner"))}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
          width: "50%",
          alignSelf: "center",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderWidth: 1,
          borderColor: "red",
          backgroundColor: "red",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Change role</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Profile