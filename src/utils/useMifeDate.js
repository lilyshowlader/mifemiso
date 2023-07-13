import { useContext, createContext } from "react";

const MifeDateContext = createContext({
  date: new Date(),
  setDate: () => {}
});

export const addTime = (date, time, type) => {
  if(!type) {
    throw new Error("No type provided");
  }

  const newDate = new Date(date);
  const upperCaseType = type.slice(0,1).toUpperCase()+type.slice(1);

  try {
    const getter = `getUTC${upperCaseType}`;
    const setter = `setUTC${upperCaseType}`;

    newDate[setter](newDate[getter]() + time);
  } catch(e) {
    console.error(e);
  }

  return newDate;
}

export const calcTodayMidnight = () => new Date(1000 * 60 * 60 * 24 * Math.floor(Date.now() / (1000 * 60 * 60 * 24)));

export const MifeDateProvider = MifeDateContext.Provider;
export const useMifeDate = () => useContext(MifeDateContext);