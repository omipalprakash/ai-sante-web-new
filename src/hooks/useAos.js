// filepath: c:\ai-sante-web\src\hooks\useAos.js
import { useEffect } from 'react';
import Aos from 'aos';

const useAos = (options = { duration: 900 }) => {
  useEffect(() => {
    Aos.init(options);
  }, [options]);
};

export default useAos;