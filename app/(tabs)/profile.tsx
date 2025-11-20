import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'expo-router';
import { User, Mail, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 pt-4 pb-6">
          <Text className="text-3xl font-bold text-secondary">Profile</Text>
        </View>

        {/* Profile Info */}
        <View className="px-4">
          <View className="bg-white rounded-lg p-6 mb-4">
            <View className="items-center mb-6">
              <View className="bg-primary w-20 h-20 rounded-full items-center justify-center mb-3">
                <User color="#FFFFFF" size={40} />
              </View>
              <Text className="text-2xl font-bold text-secondary">
                {user?.name || 'Guest User'}
              </Text>
            </View>

            <View className="border-t border-gray-200 pt-4">
              <View className="flex-row items-center mb-4">
                <Mail color="#9CA3AF" size={20} />
                <Text className="ml-3 text-gray-700">
                  {user?.email || 'guest@example.com'}
                </Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View className="bg-white rounded-lg mb-4">
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
              <Text className="flex-1 text-secondary font-semibold">Order History</Text>
              <Text className="text-gray-400">›</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
              <Text className="flex-1 text-secondary font-semibold">Saved Addresses</Text>
              <Text className="text-gray-400">›</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4">
              <Text className="flex-1 text-secondary font-semibold">Payment Methods</Text>
              <Text className="text-gray-400">›</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            className="bg-white rounded-lg p-4 flex-row items-center justify-center"
            onPress={handleLogout}
          >
            <LogOut color="#EF4444" size={20} />
            <Text className="ml-3 text-red-500 font-bold text-lg">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
