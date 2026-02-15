import { Person } from "@/types/common";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PersonItemProps {
  item: Person;
}

export default function PersonItem({ item }: PersonItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/details-screen",
      params: { person: JSON.stringify(item) },
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Height: {item.height} | Mass: {item.mass}</Text>
      <Text style={styles.detail}>Birth Year: {item.birth_year}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "yellow",
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: "#666",
  },
});
