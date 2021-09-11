import React, { createContext } from "react";

export const LocaleContext =
  createContext<{
    tel: string;
    signUpLink: string;
    signInLink: string;
    signUpLinkPersonal?: string;
  }>(null);

export const useLocaleInfo = () => {
  return React.useContext(LocaleContext);
};
