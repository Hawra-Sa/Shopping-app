// source/components/CartIcon.js
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartIcon = ({ totalQuantity, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="cart" size={30} color="black" />
      {totalQuantity > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalQuantity}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CartIcon;
