import { describe, it, expect, beforeEach } from 'vitest';
import { useUserStore } from '../store/userStore';

describe('userStore', () => {
    beforeEach(() => {
        useUserStore.setState({
            xp: 0,
            streak: 0,
            completedLessons: {},
            lastLoginDate: null
        });
    });

    it('should start with 0 XP', () => {
        expect(useUserStore.getState().xp).toBe(0);
    });

    it('should add XP', () => {
        useUserStore.getState().addXp(10);
        expect(useUserStore.getState().xp).toBe(10);
    });

    it('should mark lesson as complete', () => {
        useUserStore.getState().completeLesson('lesson-1');
        expect(useUserStore.getState().completedLessons['lesson-1']).toBe(true);
    });
});
