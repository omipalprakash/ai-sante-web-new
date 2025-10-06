import {useState} from 'react';

export const useUpdateStateObject = initialState => {
  const [states, setState] = useState(initialState);

  const updateStateOneByOne = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return [states, updateStateOneByOne, setState];
};

export const useUpdateErrorObject = initialState => {
  const [error, setError] = useState(initialState);

  const updateErrorOneByOne = (key, value) => {
    setError(prevState => ({
      ...prevState,
      [key]: value,
    }));
    return false;
  };

  return [error, updateErrorOneByOne, setError];
};
