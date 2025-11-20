import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateQuantity, removeFromCart, clearCart } from '@/redux/slices/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react-native';

export default function CartScreen() {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id: string, currentQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrement = (id: string, currentQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    // Show success animation or navigate to checkout
    alert('Checkout feature coming soon!');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 pt-4 pb-2">
          <Text className="text-3xl font-bold text-secondary">Cart</Text>
          {items.length > 0 && (
            <TouchableOpacity onPress={() => dispatch(clearCart())}>
              <Text className="text-primary font-semibold mt-2">Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        {items.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-6xl mb-4">🛒</Text>
            <Text className="text-xl text-gray-600 font-semibold">Your cart is empty</Text>
            <Text className="text-gray-500 mt-2">Add some delicious food!</Text>
          </View>
        ) : (
          <>
            <ScrollView className="flex-1 px-4 py-4">
              {items.map((item) => (
                <View key={item.id} className="bg-white rounded-lg mb-3 p-4">
                  <View className="flex-row">
                    <Image
                      source={{ uri: item.image }}
                      className="w-20 h-20 rounded-lg"
                      resizeMode="cover"
                    />
                    <View className="flex-1 ml-3">
                      <Text className="text-lg font-bold text-secondary">
                        {item.name}
                      </Text>
                      <Text className="text-primary font-bold mt-1">
                        ${item.price.toFixed(2)}
                      </Text>
                      <View className="flex-row items-center mt-2">
                        <TouchableOpacity
                          className="bg-background p-2 rounded-lg"
                          onPress={() => handleDecrement(item.id, item.quantity)}
                        >
                          <Minus color="#2C2C2C" size={16} />
                        </TouchableOpacity>
                        <Text className="mx-4 font-bold text-secondary">
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          className="bg-background p-2 rounded-lg"
                          onPress={() => handleIncrement(item.id, item.quantity)}
                        >
                          <Plus color="#2C2C2C" size={16} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      className="ml-2"
                      onPress={() => handleRemove(item.id)}
                    >
                      <Trash2 color="#EF4444" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Footer */}
            <View className="bg-white px-4 py-6 border-t border-gray-200">
              <View className="flex-row justify-between mb-4">
                <Text className="text-lg font-semibold text-secondary">Total</Text>
                <Text className="text-2xl font-bold text-primary">
                  ${total.toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity
                className="bg-primary py-4 rounded-lg"
                onPress={handleCheckout}
              >
                <Text className="text-white text-center font-bold text-lg">
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
