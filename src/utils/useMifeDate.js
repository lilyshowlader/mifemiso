import { useContext, createContext } from "react";

const MifoDateContext = createContext({
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
    // I'm not going to pretend like this is good or smart
    // it's actually the opposite of both of those things.
    // don't do this. if statements or a switch is king. this was just faster to type lol
    const getter = `getUTC${upperCaseType}`;
    const setter = `setUTC${upperCaseType}`;

    newDate[setter](newDate[getter]() + time);
  } catch(e) {
    console.error(e);
  }

  return newDate;
}

export const MifoDateProvider = MifoDateContext.Provider;
export const useMifoDate = () => useContext(MifoDateContext);