import React, { useRef, useState } from "react";
import { TouchableWithoutFeedback, Text, View, Image } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import video1 from "../../assets/videos/sonny.mp4";
import { styles } from "../../screens/Home/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPausePlay = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPausePlay} style={styles.container}>
        <View>
          <Video
            source={video1}
            style={styles.video}
            resizeMode="cover"
            shouldPlay={!paused}
            isLooping
          />

          {/* bottom content and right-side content  */}
          <View style={styles.bottomRightContent}>
            {/* right content */}
            <View style={styles.rightContent}>
              <View style={styles.rightImageContainer}>
                <Image
                  source={{
                    uri: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5NjE2ODE4MTI4NjkyNDIx/imago1008478842h.jpg",
                  }}
                  style={styles.profilePicture}
                />
              </View>

              {/* like icon */}
              <View style={styles.homeIcons}>
                <AntDesign name="heart" size={24} color="white" />
                <Text style={styles.statsLabel}>320.9k</Text>
              </View>
              {/* end of like icon */}

              {/* comment icon */}
              <View style={styles.homeIcons}>
                <FontAwesome name="commenting" size={24} color="white" />
                <Text style={styles.statsLabel}>200</Text>
              </View>
              {/* end of comment icon */}

              {/* bookmark icon */}
              <View style={styles.homeIcons}>
                <FontAwesome name="bookmark" size={24} color="white" />
                <Text style={styles.statsLabel}>39k</Text>
              </View>
              {/* end of bookmark icon */}

              {/* share icon */}
              <View style={styles.homeIcons}>
                <MaterialCommunityIcons name="share" size={24} color="white" />
                <Text style={styles.statsLabel}>10.9k</Text>
              </View>
              {/* end of share icon */}
            </View>
            {/* end of right content */}
            {/* bottom content */}
            <View>
              <Text style={styles.username}>@spursofficial</Text>
              <Text style={styles.bottomDescription}>
                Harry Kane vs Manchester City
              </Text>
              <View style={styles.details}>
                <MaterialCommunityIcons name="music" size={24} color="white" />
                <Text style={styles.videoSound}>original sound</Text>
                <Text style={styles.videoSound}>Peter Drury</Text>
              </View>
            </View>
            {/* end of bottom content */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
