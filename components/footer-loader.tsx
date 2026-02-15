import { ActivityIndicator, StyleSheet } from "react-native";

interface FooterLoaderProps {
  loading: boolean;
}

export default function FooterLoader({ loading }: FooterLoaderProps) {
  if (!loading) return null;
  return <ActivityIndicator size="large" style={styles.loader} />;
}

const styles = StyleSheet.create({
  loader: {
    marginVertical: 20,
  },
});
