import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect } from "react";
import { usePlaybackStore } from "@/stores/player";
import { Audio } from "expo-av";

const BottomPlayer = () => {
  const {
    uri,
    PlayableInstance,
    PlayableStatus,
    setPlaybaleInstance,
    setPlaybaleStatus,
  } = usePlaybackStore((s) => s);

  const handlePlayPause = async () => {
    if (!PlayableStatus?.isLoaded) return;
    if (PlayableStatus.isPlaying) {
      await PlayableInstance?.pauseAsync();
    } else {
      await PlayableInstance?.playAsync();
    }
  };

  const loadAudio = async (uri: string) => {
    if (PlayableInstance != null) {
      await PlayableInstance.unloadAsync();
    }
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri },
        {
          shouldPlay: true,
        }
      );
      console.log("Loading song");
      setPlaybaleInstance(sound);
      setPlaybaleStatus(status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (uri) {
      loadAudio(uri);
    }

    return () => {
      if (PlayableInstance) {
        console.log("Unloading");
        PlayableInstance.unloadAsync();
      }
    };
  }, [uri]);
  if (uri == "") return;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{uri || "no uri"}</Text>
        {PlayableInstance == null && <Text>Not loaded</Text>}
      </View>
      {PlayableInstance != null && PlayableStatus?.isLoaded && (
        <View>
          <Button
            title={PlayableStatus.isPlaying ? "Pause" : "Play"}
            onPress={handlePlayPause}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 48,
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    zIndex: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {},
});
export default BottomPlayer;
