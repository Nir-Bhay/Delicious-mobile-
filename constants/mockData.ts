export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Pizza', icon: '🍕' },
  { id: '2', name: 'Burgers', icon: '🍔' },
  { id: '3', name: 'Sushi', icon: '🍣' },
  { id: '4', name: 'Desserts', icon: '🍰' },
  { id: '5', name: 'Drinks', icon: '🥤' },
];

export const MOCK_FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, basil, and tomato sauce on a crispy thin crust.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
    category: 'Pizza',
    rating: 4.5,
    prepTime: '20-30 min',
  },
  {
    id: '2',
    name: 'Cheeseburger Deluxe',
    description: 'Juicy beef patty with melted cheddar, lettuce, tomato, pickles, and our special sauce.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'Burgers',
    rating: 4.7,
    prepTime: '15-25 min',
  },
  {
    id: '3',
    name: 'Dragon Roll',
    description: 'Premium sushi roll with eel, avocado, cucumber, topped with spicy mayo and eel sauce.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500',
    category: 'Sushi',
    rating: 4.8,
    prepTime: '25-35 min',
  },
  {
    id: '4',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500',
    category: 'Desserts',
    rating: 4.9,
    prepTime: '10-15 min',
  },
  {
    id: '5',
    name: 'BBQ Chicken Pizza',
    description: 'Smoky BBQ sauce, grilled chicken, red onions, and cilantro on a hand-tossed crust.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    category: 'Pizza',
    rating: 4.6,
    prepTime: '20-30 min',
  },
  {
    id: '6',
    name: 'Mango Smoothie',
    description: 'Fresh mango blended with yogurt, honey, and ice for a refreshing tropical drink.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500',
    category: 'Drinks',
    rating: 4.4,
    prepTime: '5-10 min',
  },
];

export const USE_MOCK_DATA = true; // Toggle this to switch between mock and API data
