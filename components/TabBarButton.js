import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Icon from "./Icon";

const TabBarButton = (props) => {
  const { title, onPress, accessibilityState, icon, iconSize } = props;
  const focused = accessibilityState.selected;

  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const startScaleUpAnimation = () => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const startScaleDownAnimation = () => {
    Animated.timing(scaleAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const startRotateAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 360,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const startRotateBackAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (focused) {
      startScaleUpAnimation();
      startRotateAnimation();
    } else {
      startScaleDownAnimation();
      startRotateBackAnimation();
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container]}
    >
      <View>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "#B3EBF7", borderRadius: 16 },
            { transform: [{ scale: scaleAnimation }] },
          ]}
        />
        <View
          style={[
            styles.btn,
            // { backgroundColor: focused ? "#B3EBF7" : "white" },
          ]}
        >
          <Animated.View
            style={{ transform: [{ rotate: rotateInterpolation }] }}
          >
            <Icon
              name={icon}
              size={iconSize}
              color={focused ? "#00BEDF" : "#879DB2"}
            />
          </Animated.View>
          <Animated.View style={{ transform: [{ scale: scaleAnimation }] }}>
            {focused && (
              <Text
                style={{
                  color: focused ? "#00BEDF" : "#DADADA",
                  marginLeft: 5,
                  fontFamily: "Roboto700",
                  fontSize: 12,
                }}
              >
                {title}
              </Text>
            )}
          </Animated.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 36,
  },
});
