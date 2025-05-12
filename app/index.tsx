import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <StatusBar style="auto" />
      <ScrollView contentContainerClassName="p-4">
        {/* Header */}
        <View className="items-center my-6">
          <Image
            source={require("../assets/images/react-logo.png")}
            className="h-24 w-24 mb-2"
          />
          <Text className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            Welcome to Expo
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 text-center mt-2">
            A React Native app with NativeWind and Tailwind CSS
          </Text>
        </View>

        {/* Cards */}
        <View className="mt-6">
          <View className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md mb-4">
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              Getting Started
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mt-2">
              Edit this screen in app/index.tsx to start building your app.
            </Text>
          </View>

          <View className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md mb-4">
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              Styling with NativeWind
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mt-2">
              This project uses NativeWind to bring Tailwind CSS to React
              Native.
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-4">
          <TouchableOpacity
            className="bg-indigo-600 py-3 px-6 rounded-lg flex-1 mr-2"
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium text-center">
              Documentation
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-200 dark:bg-gray-700 py-3 px-6 rounded-lg flex-1 ml-2"
            activeOpacity={0.8}
          >
            <Text className="text-gray-800 dark:text-white font-medium text-center">
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
