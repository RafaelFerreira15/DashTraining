import { atom } from 'jotai';

export const userName = atom<string>('');
export const userEmail = atom<string>('');
export const userState = atom<string>('');
export const sessaoUser = atom<{ nome: string; email: string } | null>(null);