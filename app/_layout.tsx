import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function RootLayout() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="home-screen" options={{ headerShown: false }} />
        <Stack.Screen name="details-screen" options={{ headerShown: true, title: "Person" }} />
      </Stack>
      <Toast />
    </SafeAreaView>

  );
}
