import { View, Text } from "react-native";
import React from "react";

const Copy = () => {
  return (
    <View>
      <Text>Copy</Text>
    </View>
  );
};

export default Copy;
// import React, { useState, useEffect } from "react";
// import { View, Button, Text } from "react-native";
// import { AVPlaybackStatus, AVPlaybackStatusSuccess, Audio } from "expo-av";

// const MusicPlayer = () => {
//   const [sound, setSound] = useState<Audio.Sound | null>();
//   const [status, setStatus] = useState<AVPlaybackStatus>();

//   const updateStatus = (status: AVPlaybackStatus) => {
//     setStatus(status);
//   };
//   async function loadSound() {
//     try {
//       console.log("Loading Sound");
//       const { sound } = await Audio.Sound.createAsync(
//         {
//           uri: "https://s3.ap-south-1.amazonaws.com/audiofy.aditya-nr.in/aab.webm",
//         },
//         {
//           rate: 1.0,
//           volume: 1.0,
//           isMuted: false,
//           isLooping: false,
//           positionMillis: 1000,
//           progressUpdateIntervalMillis: 1000,
//         },
//         updateStatus
//       );
//       setSound(sound);
//     } catch (error) {
//       console.log("Error loading or playing sound:", error);
//     }
//   }

//   useEffect(() => {
//     return () => {
//       sound && sound.unloadAsync();
//     };
//   }, [sound]);

//   useEffect(() => {
//     let interval = null;
//     if (sound && status?.isLoaded) {
//       interval = setInterval(() => {
//         sound?.getStatusAsync();
//         console.log("updating");
//       }, 1000);
//     }

//     return () => {
//       interval && clearInterval(interval);
//     };
//   }, [status, sound]);

//   return (
//     <View style={{ justifyContent: "center", flex: 1 }}>
//       {sound == null && <Button title="Load Sound" onPress={loadSound} />}
//       {sound != null && (
//         <Button
//           title="Unload Sound"
//           onPress={async () => {
//             await sound?.unloadAsync();
//             setSound(null);
//           }}
//         />
//       )}
//       {status?.isLoaded && (
//         <Text>Buffering : {status.isBuffering ? "y" : "n"}</Text>
//       )}
//       {status?.isLoaded && (
//         <View>
//           <Text>Duration : {status.durationMillis}</Text>
//           <Text>Current : {status.positionMillis}</Text>
//           <Text>Loaded : {status.playableDurationMillis}</Text>
//           <Button
//             title={status.isPlaying ? "Pause" : "Play"}
//             onPress={async () => {
//               status.isPlaying
//                 ? await sound?.pauseAsync()
//                 : await sound?.playAsync();
//             }}
//           />
//           <Button
//             title="Go to Mid"
//             onPress={async () => {
//               await sound?.setPositionAsync(100000);
//             }}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// export default MusicPlayer;
