import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const colorScheme = useColorScheme();

  const handleCall = () => {
    console.log(name, roomId);
    navigation.navigate('Call', {
      name,
      roomId,
    });
  };

  return (
    <View style={styles.container(colorScheme)}>
      <Text style={styles.text(colorScheme)}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput(colorScheme)}
        onChangeText={val => {
          setName(val);
        }}
      />
      <Text style={styles.text(colorScheme)}>Room No</Text>
      <TextInput
        placeholder="Room No"
        style={styles.textInput(colorScheme)}
        onChangeText={val => {
          setRoomId(val);
        }}
      />
      <Button
        onPress={handleCall}
        title="Call"
        // color={colorScheme === 'dark' ? '#fff' : '#000'}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: colorScheme => ({
    flex: 1,
    padding: 20,
    backgroundColor: colorScheme === 'dark' ? '#777' : '#fff',
  }),
  text: colorScheme => ({
    color: colorScheme === 'dark' ? '#fff' : '#000',
  }),
  textInput: colorScheme => ({
    fontSize: 18,
    borderWidth: 1,
    borderColor: colorScheme === 'dark' ? '#fff' : '#000',
    marginVertical: 10,
    backgroundColor: colorScheme === 'dark' ? '#aaa' : '#fff',
    color: colorScheme === 'dark' ? '#fff' : '#000',
  }),
});
