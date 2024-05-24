import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const YourComponent = () => {
  const [imageUri, setImageUri] = useState(null);

  const openGallery = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Set your Restaurant Picture" onPress={openGallery} />
      {imageUri && <Image source={imageUri} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default YourComponent;