'use client'

import { Index } from '@/components/contexts/Loading';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface IContextProps {
    show: () => void;
    hide: () => void;
}
const Context = createContext<IContextProps>({} as IContextProps);

export const LoadingProvider = ({
  children
}:PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  const show = () => {setIsLoading(true);}
  const hide = () => {setIsLoading(false);}
  return (
    <Context.Provider
      value={{
        show,
        hide
    }}>
      {children}
      <Index
        open={isLoading}
      />
    </Context.Provider>
  );
};
export const useLoading = () => useContext(Context);