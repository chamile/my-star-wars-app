import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface SearchFilterProps {
  onChangeText: (text: string) => void;
  filterPress: () => void;
}

export default function SearchFilter({ onChangeText, filterPress }: SearchFilterProps) {
  return (
    <View>
      <Text style={styles.title}>Filter by name:</Text>
      <TextInput
        placeholder="Type a name to filter"
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.filterButton} onPress={filterPress}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  filterButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
