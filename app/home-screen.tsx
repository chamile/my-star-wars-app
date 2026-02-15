import AddPersonModal from "@/components/add-person-modal";
import FooterLoader from "@/components/footer-loader";
import PersonItem from "@/components/person-item";
import SearchFilter from "@/components/search-filter";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { getPeople } from "../services/api";
import { Person } from "../types/common";

export default function HomeScreen() {
  const [people, setPeople] = useState<Person[]>([]);
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  const fetchPeople = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const data = await getPeople(page);
      setPeople((prev) => [...prev, ...data]);
      setAllPeople((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      Toast.show({ type: "error", text1: "Error", text2: message });
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleFilterByName = (text: string) => {
    if (text === "") {
      setPeople(allPeople);
    } else {
      const filteredPeople = allPeople.filter((person) => person.name.toLowerCase().includes(text.toLowerCase()));
      setPeople(filteredPeople);
    }
  }

  const openAddModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const handleAddPerson = (person: Person) => {
    setPeople((prev) => [person, ...prev]);
    setAllPeople((prev) => [person, ...prev]);
  }

  return (
    <View style={styles.container}>
      <SearchFilter
        onChangeText={(text) => setSearch(text)}
        filterPress={() => handleFilterByName(search)}
      />
      <TouchableOpacity style={styles.createButton} onPress={openAddModal}>
        <Text style={styles.createButtonText}>+ Create</Text>
      </TouchableOpacity>
      <FlatList
        data={people}
        renderItem={({ item }) => <PersonItem item={item} />}
        keyExtractor={(item, index) => `${item.url}-${index}`}
        onEndReached={fetchPeople}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<FooterLoader loading={loading} />}
      />

      <AddPersonModal visible={modalVisible} onClose={closeModal} onAdd={handleAddPerson} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    gap: 10,
    flex: 1,
  },
  createButton: {
    backgroundColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  createButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
