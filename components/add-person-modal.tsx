import { createPerson } from "@/services/api";
import { Person } from "@/types/common";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

interface AddPersonModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (person: Person) => void;
}

export default function AddPersonModal({ visible, onClose, onAdd }: AddPersonModalProps) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      Toast.show({ type: "error", text1: "Validation Error", text2: "Name is required" });
      return;
    }

    const newPerson: Person = {
      name,
      height,
      mass,
      birthYear,
      hairColor: "",
      skinColor: "",
      eyeColor: "",
      gender: "",
      homeworld: "",
      films: [],
      url: Date.now().toString(),
    };

    try {
      await createPerson(newPerson);
      onAdd(newPerson);
      setName("");
      setHeight("");
      setMass("");
      setBirthYear("");
      onClose();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create person";
      Toast.show({ type: "error", text1: "Error", text2: message });
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.closeButton}>
            <TouchableOpacity onPress={onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTitle}>Add Person</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Height"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Mass"
            value={mass}
            onChangeText={setMass}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Birth Year"
            value={birthYear}
            onChangeText={setBirthYear}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "95%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
  },
  submitButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

});
