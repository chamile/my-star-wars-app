import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  return (

    <Stack>
      <Stack.Screen name="home-screen" options={{ headerShown: false }} />
      <Stack.Screen name="details-screen" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>

  );
}
