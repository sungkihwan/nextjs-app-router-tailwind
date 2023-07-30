'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react';
import {Index} from "@/components/contexts/Alert";

interface IContextProps {
  alert: (title: string, content?: string, onConfirm?:()=>void) => void;
}
const Context = createContext<IContextProps>({} as IContextProps);

export const FeedbackProvider = ({
  children
}:PropsWithChildren) => {
  const [alertData, setAlertData] = useState({
    open: false,
    title: '',
    content: '',
    onConfirm: false ? ()=>{} : null
  });

  const alert = (title: string, content?: string, onConfirm?:()=>void) => {
    setAlertData({ open: true, title, content: content || '',  onConfirm: onConfirm ? onConfirm : null});
  };

  const closeAlert = () => {
    if(alertData.onConfirm) {
      alertData.onConfirm();
    }
    setAlertData({ open: false, title: '', content: '', onConfirm: null })
  };

  return (
    <Context.Provider
      value={{
        alert
      }}
    >
      {children}
      <Index
        {...alertData}
        onClose={closeAlert}
      />
    </Context.Provider>
  );
};

export const useFeedback = () => useContext(Context);