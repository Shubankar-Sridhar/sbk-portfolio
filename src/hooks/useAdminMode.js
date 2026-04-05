import { useEffect } from 'react';
import { useData } from '../context/DataContext';

export function useAdminMode() {
  const { setIsAdminMode } = useData();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const secret = params.get('admin');
    const isValid = secret === import.meta.env.VITE_ADMIN_SECRET;
    
    if (isValid) {
      setIsAdminMode(true);
      // Clean URL without reloading page
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [setIsAdminMode]);
}