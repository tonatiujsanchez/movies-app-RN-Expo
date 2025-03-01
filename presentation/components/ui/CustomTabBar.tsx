import { useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_WIDTH = 120;


const CustomTabBar: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      const totalTabs = state.routes.length;
      const shouldCenter = state.index > 0 && state.index < totalTabs - 1;

      let scrollToX;
      if (shouldCenter) {
        const centerOffset = (SCREEN_WIDTH - TAB_WIDTH) / 2;
        scrollToX = state.index * TAB_WIDTH - centerOffset;
      } else if (state.index === 0) {
        scrollToX = 0;
      } else {
        scrollToX = (totalTabs - 1) * TAB_WIDTH - SCREEN_WIDTH + TAB_WIDTH;
      }

      scrollViewRef.current.scrollTo({
        x: Math.max(0, scrollToX),
        animated: true,
      });
    }
  }, [state.index, state.routes.length]);

  return (
    <View style={styles.tabBar}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBarScrollContent}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={styles.tabItem}
            >
              <Text
                style={[
                  styles.tabBarLabel,
                  isFocused && styles.tabBarLabelFocused,
                ]}
              >
                {label.toString()}
              </Text>
              {isFocused && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
  tabBarScrollContent: {
    flexGrow: 1,
  },
  tabItem: {
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    paddingBlockStart: 16,
    paddingBlockEnd: 14,
    position: "relative",
  },
  tabBarLabel: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#000",
    fontWeight: "500"
  },
  tabBarLabelFocused: {
    color: "#ff6600",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#ff6600",
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
});

export default CustomTabBar