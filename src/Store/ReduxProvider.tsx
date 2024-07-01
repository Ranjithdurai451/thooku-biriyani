'use client';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { MenuItemType } from '@/Utils/types';
import { fetchMenuItems } from '../../backend/Actions/actions';
import { setMenuItems } from './Slices/menuSlice';
import { setCart } from './Slices/cartSlice';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
function dispatch(arg0: { payload: any; type: 'menu/setMenuItems' }) {
  throw new Error('Function not implemented.');
}
