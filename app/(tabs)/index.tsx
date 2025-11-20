import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { MOCK_CATEGORIES, MOCK_FOOD_ITEMS } from '@/constants/mockData';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const filteredItems = MOCK_FOOD_ITEMS.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item: any) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-4 pt-4 pb-2">
          <Text className="text-3xl font-bold text-secondary">Delicious</Text>
          <Text className="text-gray-600 mt-1">Order your favorite food</Text>
        </View>

        {/* Search Bar */}
        <View className="px-4 py-4">
          <View className="flex-row items-center bg-white px-4 py-3 rounded-lg">
            <Search color="#9CA3AF" size={20} />
            <TextInput
              className="flex-1 ml-3"
              placeholder="Search for food..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Categories */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-secondary px-4 mb-3">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {MOCK_CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="bg-white mr-3 px-6 py-4 rounded-lg items-center"
              >
                <Text className="text-3xl mb-1">{category.icon}</Text>
                <Text className="text-secondary font-semibold">{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Items */}
        <View className="px-4 pb-6">
          <Text className="text-xl font-bold text-secondary mb-3">Popular Items</Text>
          {filteredItems.map((item) => (
            <View key={item.id} className="bg-white rounded-lg mb-4 overflow-hidden">
              <Image
                source={{ uri: item.image }}
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-4">
                <View className="flex-row justify-between items-start mb-2">
                  <Text className="text-lg font-bold text-secondary flex-1">
                    {item.name}
                  </Text>
                  <Text className="text-primary font-bold text-lg">${item.price}</Text>
                </View>
                <Text className="text-gray-600 mb-2" numberOfLines={2}>
                  {item.description}
                </Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <Text className="text-yellow-500 mr-1">⭐</Text>
                    <Text className="text-gray-600">{item.rating} • {item.prepTime}</Text>
                  </View>
                  <TouchableOpacity
                    className="bg-primary px-6 py-2 rounded-lg"
                    onPress={() => handleAddToCart(item)}
                  >
                    <Text className="text-white font-semibold">Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
