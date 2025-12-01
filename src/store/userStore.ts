import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    xp: number;
    streak: number;
    completedLessons: Record<string, boolean>; // lessonId -> true
    lastLoginDate: string | null;
    dailyGoal: number;
    dailyProgress: Record<string, number>; // date string -> xp amount
    geminiApiKey: string | null;
    addXp: (amount: number) => void;
    completeLesson: (lessonId: string) => void;
    setGeminiApiKey: (key: string) => void;
    removeGeminiApiKey: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            xp: 0,
            streak: 0,
            completedLessons: {},
            lastLoginDate: null,
            dailyGoal: 50,
            dailyProgress: {},
            geminiApiKey: null,
            addXp: (amount) =>
                set((state) => {
                    const today = new Date().toISOString().split('T')[0];
                    const currentDailyXp = state.dailyProgress[today] || 0;
                    return {
                        xp: state.xp + amount,
                        dailyProgress: {
                            ...state.dailyProgress,
                            [today]: currentDailyXp + amount,
                        },
                    };
                }),
            completeLesson: (lessonId) =>
                set((state) => ({
                    completedLessons: { ...state.completedLessons, [lessonId]: true },
                })),
            setGeminiApiKey: (key) => set({ geminiApiKey: key }),
            removeGeminiApiKey: () => set({ geminiApiKey: null }),
        }),
        {
            name: 'devlingo-storage',
        }
    )
);
