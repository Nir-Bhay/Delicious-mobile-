# Delicious Mobile - React Native Food Delivery App

A modern, high-performance food delivery mobile app built with React Native (Expo) and TypeScript.

## 🚀 Tech Stack

- **Framework:** React Native (Expo Router)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS)
- **State Management:** Redux Toolkit
- **Navigation:** Expo Router (File-based routing)
- **Icons:** Lucide React Native
- **API Handling:** Axios

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
- Press `a` for Android
- Press `i` for iOS
- Scan QR code with Expo Go app

## 🏗️ Project Structure

```
delicious-mobile/
├── app/                    # Expo Router screens
│   ├── (auth)/            # Authentication screens
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/            # Main tab screens
│   │   ├── index.tsx      # Home screen
│   │   ├── cart.tsx       # Cart screen
│   │   └── profile.tsx    # Profile screen
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Entry point
├── components/            # Reusable components
├── constants/            # Configuration and mock data
│   ├── config.ts
│   └── mockData.ts
├── redux/                # Redux state management
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── cartSlice.ts
│   └── store.ts
├── services/             # API services
│   └── api.ts
└── types/                # TypeScript types
    └── index.ts
```

## 🎨 Features

- ✅ **Authentication Flow** - Login/Register with JWT
- ✅ **Home Feed** - Search, Categories, Popular Items
- ✅ **Cart Management** - Add/Remove items, Update quantities
- ✅ **Profile Screen** - User details and logout
- ✅ **Mock Data Mode** - Works without backend
- ✅ **Redux State Management** - Cart and Auth state
- ✅ **NativeWind Styling** - Tailwind CSS classes

## 🔧 Configuration

### Toggle Mock Data

In `constants/config.ts`:
```typescript
export const APP_CONFIG = {
  USE_MOCK_DATA: true, // Set to false to use real API
};
```

### API Configuration

In `constants/config.ts`:
```typescript
export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api', // Your backend URL
  TIMEOUT: 10000,
};
```

## 🎯 Usage

### Default Login (Mock Mode)
- Email: any@email.com
- Password: any password

The app uses mock data by default, so you can login with any credentials.

### Adding Items to Cart
1. Browse items on the Home screen
2. Tap "Add to Cart" button
3. View cart on Cart tab
4. Adjust quantities with +/- buttons

## 🌈 Theme

- **Primary Color:** #FF4B3A (Orange)
- **Background:** #F2F2F2 (Off-White)
- **Secondary:** #2C2C2C (Dark Gray)

## 📝 Next Steps

1. Connect to real backend API
2. Add food detail screen
3. Implement checkout flow
4. Add order history
5. Integrate payment gateway

## 🤝 Contributing

This is a template project. Feel free to customize and extend as needed!

## 📄 License

MIT
# Delicious-mobile-
