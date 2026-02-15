import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Person } from "../types/common";

export default function DetailsScreen() {
  const { person } = useLocalSearchParams();
  const personData: Person = JSON.parse(person as string);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{personData.name}</Text>
      <Text style={styles.detail}>Height: {personData.height}</Text>
      <Text style={styles.detail}>Mass: {personData.mass}</Text>
      <Text style={styles.detail}>Hair Color: {personData.hairColor}</Text>
      <Text style={styles.detail}>Skin Color: {personData.skinColor}</Text>
      <Text style={styles.detail}>Eye Color: {personData.eyeColor}</Text>
      <Text style={styles.detail}>Birth Year: {personData.birthYear}</Text>
      <Text style={styles.detail}>Gender: {personData.gender}</Text>
      <Text style={styles.detail}>Homeworld: {personData.homeworld}</Text>

      <Text style={styles.sectionTitle}>Films:</Text>
      {personData.films.map((film, index) => (
        <Text key={index} style={styles.listItem}>{film}</Text>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    marginLeft: 16,
    marginBottom: 4,
  },
});
