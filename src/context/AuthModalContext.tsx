'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthModalType = "login" | "register" | "forgotPassword";

interface AuthModalState {
  isOpen: boolean;
  type: AuthModalType;
}

interface AuthModalContextType {
  authModalState: AuthModalState;
  setAuthModalState: React.Dispatch<React.SetStateAction<AuthModalState>>;
  openModal: (type: AuthModalType) => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const [authModalState, setAuthModalState] = useState<AuthModalState>({
    isOpen: false,
    type: "login",
  });

  const openModal = (type: AuthModalType) => {
    setAuthModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <AuthModalContext.Provider value={{ authModalState, setAuthModalState, openModal, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
};
