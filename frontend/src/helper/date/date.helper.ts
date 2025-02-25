import { TIME_TO_UPDATE } from '../../constants/constants';

export const setStoreCurrentTime = (): string => {
  const currentTime = new Date().toISOString();
  localStorage.setItem('currentTime', currentTime);
  return currentTime;
};

export const getStoreCurrentTime = (): string => {
  if (!localStorage.getItem('currentTime')) {
    setStoreCurrentTime();
  }
  return localStorage.getItem('currentTime') || '';
};

export const shouldUpdate = () => {
  const storedTime = new Date(getStoreCurrentTime());
  const currentTime = new Date();

  const lastUpdated = currentTime.getTime() - storedTime.getTime();
  const hoursDifference = lastUpdated / (1000 * 60 * 60);

  return hoursDifference > TIME_TO_UPDATE;
};
