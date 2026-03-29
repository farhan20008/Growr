export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  serving: string;
  category: 'protein' | 'carb' | 'dairy' | 'vegetable' | 'snack' | 'fruit';
}

export interface MealEntry {
  id: string;
  foodId: string;
  foodName: string;
  calories: number;
  protein: number;
  quantity: number;
  serving: string;
  mealType: 'breakfast' | 'lunch' | 'snacks' | 'dinner';
  timestamp: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  completedSets: number[];
}

export interface WorkoutDay {
  day: string;
  label: string;
  focus: string;
  exercises: Exercise[];
}

export interface WaterEntry {
  amount: number;
  timestamp: string;
}

export interface DailyData {
  date: string;
  calories: number;
  protein: number;
  water: number;
  workoutCompleted: boolean;
  weight?: number;
  energy?: number;
}

export const commonFoods: FoodItem[] = [
  { id: 'egg', name: '1 Egg (boiled)', calories: 78, protein: 6, serving: '1 piece', category: 'protein' },
  { id: 'rice', name: '1 Cup Rice', calories: 206, protein: 4, serving: '1 cup', category: 'carb' },
  { id: 'dal', name: '1 Bowl Dal', calories: 120, protein: 9, serving: '1 bowl', category: 'protein' },
  { id: 'roti', name: '1 Roti', calories: 100, protein: 3, serving: '1 piece', category: 'carb' },
  { id: 'milk', name: '1 Glass Milk', calories: 120, protein: 8, serving: '250ml', category: 'dairy' },
  { id: 'chicken', name: '100g Chicken', calories: 165, protein: 31, serving: '100g', category: 'protein' },
  { id: 'fish', name: '100g Fish', calories: 136, protein: 26, serving: '100g', category: 'protein' },
  { id: 'banana', name: '1 Banana', calories: 89, protein: 1, serving: '1 piece', category: 'fruit' },
  { id: 'soy-chunks', name: 'Soy Chunks (50g)', calories: 170, protein: 26, serving: '50g', category: 'protein' },
  { id: 'chola', name: '1 Bowl Chola', calories: 164, protein: 9, serving: '1 bowl', category: 'protein' },
  { id: 'peanuts', name: 'Peanuts (30g)', calories: 170, protein: 7, serving: '30g', category: 'snack' },
  { id: 'bread', name: '2 Slices Bread', calories: 140, protein: 4, serving: '2 slices', category: 'carb' },
  { id: 'potato', name: '1 Potato', calories: 130, protein: 3, serving: '1 medium', category: 'vegetable' },
  { id: 'mixed-veg', name: 'Mixed Vegetables', calories: 80, protein: 3, serving: '1 bowl', category: 'vegetable' },
  { id: 'curd', name: '1 Cup Curd', calories: 98, protein: 11, serving: '1 cup', category: 'dairy' },
  { id: 'oats', name: 'Oats (50g)', calories: 190, protein: 7, serving: '50g', category: 'carb' },
];

export const defaultMeals: MealEntry[] = [
  { id: 'm1', foodId: 'egg', foodName: '1 Egg (boiled)', calories: 156, protein: 12, quantity: 2, serving: '1 piece', mealType: 'breakfast', timestamp: new Date().toISOString() },
  { id: 'm2', foodId: 'bread', foodName: '2 Slices Bread', calories: 140, protein: 4, quantity: 1, serving: '2 slices', mealType: 'breakfast', timestamp: new Date().toISOString() },
  { id: 'm3', foodId: 'banana', foodName: '1 Banana', calories: 89, protein: 1, quantity: 1, serving: '1 piece', mealType: 'breakfast', timestamp: new Date().toISOString() },
  { id: 'm4', foodId: 'rice', foodName: '1 Cup Rice', calories: 412, protein: 8, quantity: 2, serving: '1 cup', mealType: 'lunch', timestamp: new Date().toISOString() },
  { id: 'm5', foodId: 'dal', foodName: '1 Bowl Dal', calories: 120, protein: 9, quantity: 1, serving: '1 bowl', mealType: 'lunch', timestamp: new Date().toISOString() },
  { id: 'm6', foodId: 'chicken', foodName: '100g Chicken', calories: 165, protein: 31, quantity: 1, serving: '100g', mealType: 'lunch', timestamp: new Date().toISOString() },
];

export const workoutPlan: WorkoutDay[] = [
  {
    day: 'saturday', label: 'Day 1', focus: 'Chest & Triceps',
    exercises: [
      { id: 'e1', name: 'Push-ups', sets: 4, reps: 15, completedSets: [] },
      { id: 'e2', name: 'Dumbbell Bench Press', sets: 4, reps: 10, weight: 12, completedSets: [] },
      { id: 'e3', name: 'Incline Dumbbell Press', sets: 3, reps: 10, weight: 10, completedSets: [] },
      { id: 'e4', name: 'Dumbbell Flyes', sets: 3, reps: 12, weight: 8, completedSets: [] },
      { id: 'e5', name: 'Tricep Dips', sets: 3, reps: 12, completedSets: [] },
      { id: 'e6', name: 'Overhead Tricep Extension', sets: 3, reps: 12, weight: 8, completedSets: [] },
    ],
  },
  {
    day: 'sunday', label: 'Day 2', focus: 'Back & Biceps',
    exercises: [
      { id: 'e7', name: 'Pull-ups', sets: 4, reps: 8, completedSets: [] },
      { id: 'e8', name: 'Bent-over Dumbbell Rows', sets: 4, reps: 10, weight: 14, completedSets: [] },
      { id: 'e9', name: 'Lat Pulldowns', sets: 3, reps: 12, weight: 20, completedSets: [] },
      { id: 'e10', name: 'Dumbbell Curls', sets: 3, reps: 12, weight: 8, completedSets: [] },
      { id: 'e11', name: 'Hammer Curls', sets: 3, reps: 12, weight: 8, completedSets: [] },
    ],
  },
  {
    day: 'monday', label: 'Day 3', focus: 'Legs',
    exercises: [
      { id: 'e12', name: 'Bodyweight Squats', sets: 4, reps: 15, completedSets: [] },
      { id: 'e13', name: 'Dumbbell Lunges', sets: 3, reps: 12, weight: 10, completedSets: [] },
      { id: 'e14', name: 'Romanian Deadlift', sets: 4, reps: 10, weight: 16, completedSets: [] },
      { id: 'e15', name: 'Calf Raises', sets: 4, reps: 20, completedSets: [] },
      { id: 'e16', name: 'Leg Press (machine)', sets: 3, reps: 12, weight: 40, completedSets: [] },
    ],
  },
  {
    day: 'tuesday', label: 'Day 4', focus: 'Shoulders & Abs',
    exercises: [
      { id: 'e17', name: 'Overhead Dumbbell Press', sets: 4, reps: 10, weight: 10, completedSets: [] },
      { id: 'e18', name: 'Lateral Raises', sets: 4, reps: 15, weight: 5, completedSets: [] },
      { id: 'e19', name: 'Front Raises', sets: 3, reps: 12, weight: 5, completedSets: [] },
      { id: 'e20', name: 'Plank', sets: 3, reps: 45, completedSets: [] },
      { id: 'e21', name: 'Crunches', sets: 3, reps: 20, completedSets: [] },
    ],
  },
  {
    day: 'wednesday', label: 'Day 5', focus: 'Full Body / Light',
    exercises: [
      { id: 'e22', name: 'Deadlifts', sets: 3, reps: 8, weight: 20, completedSets: [] },
      { id: 'e23', name: 'Push-ups', sets: 3, reps: 15, completedSets: [] },
      { id: 'e24', name: 'Dumbbell Rows', sets: 3, reps: 10, weight: 12, completedSets: [] },
      { id: 'e25', name: 'Goblet Squats', sets: 3, reps: 12, weight: 10, completedSets: [] },
    ],
  },
];

export const weeklyData: DailyData[] = [
  { date: '2026-03-23', calories: 2150, protein: 110, water: 2500, workoutCompleted: true, weight: 68.5, energy: 4 },
  { date: '2026-03-24', calories: 2300, protein: 125, water: 2000, workoutCompleted: true, weight: 68.3, energy: 3 },
  { date: '2026-03-25', calories: 1980, protein: 95, water: 2750, workoutCompleted: false, weight: 68.4, energy: 3 },
  { date: '2026-03-26', calories: 2400, protein: 130, water: 3000, workoutCompleted: true, weight: 68.2, energy: 5 },
  { date: '2026-03-27', calories: 2200, protein: 115, water: 2250, workoutCompleted: true, weight: 68.1, energy: 4 },
  { date: '2026-03-28', calories: 2050, protein: 100, water: 2500, workoutCompleted: false, weight: 68.3, energy: 3 },
  { date: '2026-03-29', calories: 1082, protein: 65, water: 1500, workoutCompleted: false, weight: 68.2, energy: 4 },
];

export const dailyTips = [
  "Add 2 boiled eggs to your breakfast. Cheap protein, big gains.",
  "Soy chunks have more protein per taka than chicken. Use them.",
  "Drink a glass of milk before bed. Easy 8g protein.",
  "Don't skip dal with rice. Together they make a complete protein.",
  "Track consistently for 7 days. That builds the habit.",
  "Rest days matter. Muscles grow when you sleep.",
  "Banana + milk after workout = solid budget recovery shake.",
  "Chola is underrated. High protein, high fiber, very cheap.",
  "Eat enough rice. You need carbs to fuel your workouts.",
  "Consistency beats perfection. Log what you eat, every day.",
];

export const userProfile = {
  name: 'User',
  calorieGoal: 2400,
  proteinGoal: 130,
  waterGoal: 3000,
  currentWeight: 68.2,
  goalWeight: 73,
  budgetMode: true,
  workoutDays: 5,
};
