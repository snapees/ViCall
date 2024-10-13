import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {useNavigation} from '@react-navigation/native';

const CallScreen = ({route}) => {
  const name = route.params.name;
  const roomId = route.params.roomId;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={1082708288}
        appSign={
          '29e53a3b402ef57fa03a73f87334b342e81c2230868e6cdd361f628e41dfc664'
        }
        userID={name + 'userId'} // userID can be something like a phone number or the user id on your own user system.
        userName={name}
        callID={roomId} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID, reason, duration) => {
            navigation.navigate('Home');
          },
        }}
      />
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
