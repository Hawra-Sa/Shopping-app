import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";
import { useLayoutEffect } from "react";
import CartIcon from "../store/CartIcon";

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handlePress = (item) => {
    // update product selected
    dispatch(productSlice.actions.setSelectedProduct(item.id));
    navigation.navigate("Product Details");
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePress(item)} style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </Pressable>
  );
const items = useSelector((state) => state.cart.items);
const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <CartIcon
        totalQuantity={totalQuantity}
        onPress={() => navigation.navigate("Cart")}
      />
    ),
  });
}, [navigation, totalQuantity]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
});