import { createContext, useContext } from 'react';
import { observable, action } from 'mobx';

export interface User {
  username: string;
  password: string;
}

export class LocalStore {
  @observable users: User[] = [
    { username: 'Victor', password: '1234' },
    { username: 'Cristiane', password: '5678' },
    { username: 'Nicoleta', password: '1234' },
  ];
}

const StoreContext = createContext(new LocalStore());
export const useStore = () => useContext(StoreContext);