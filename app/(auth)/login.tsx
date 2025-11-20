import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/slices/authSlice';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Mock login - replace with actual API call
    dispatch(loginSuccess({
      user: { id: '1', email, name: 'John Doe' },
      token: 'mock-jwt-token'
    }));
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-background"
    >
      <View className="flex-1 justify-center px-6">
        <Text className="text-4xl font-bold text-secondary mb-2">Welcome Back</Text>
        <Text className="text-gray-600 mb-8">Sign in to continue</Text>

        <View className="mb-4">
          <Text className="text-secondary mb-2 font-semibold">Email</Text>
          <TextInput
            className="bg-white px-4 py-3 rounded-lg"
            placeholder="your@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <Text className="text-secondary mb-2 font-semibold">Password</Text>
          <TextInput
            className="bg-white px-4 py-3 rounded-lg"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-lg mb-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-bold text-lg">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text className="text-primary font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
