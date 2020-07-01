import { useState, useCallback } from 'react';

interface FetchData<T> {
  response: T | undefined;
  error: Response | undefined;
  loading: boolean;
}

export const UseFetch = <T>(
  req: (...args: any) => Promise<Response>
): [FetchData<T>, (...args: unknown[]) => void] => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<Response>();
  const [loading, setLoading] = useState(false);

  const trigger = useCallback(
    async (...args: unknown[]) => {
      setLoading(true);
      try {
        const response = await req(...args);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [req]
  );

  return [{ response, error, loading }, trigger];
};
