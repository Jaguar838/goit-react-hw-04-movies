import { useState } from 'react';

export default function useLoader() {
  const [isLoading, setLoading] = useState(false);

  return { isLoading, setLoading };
}
