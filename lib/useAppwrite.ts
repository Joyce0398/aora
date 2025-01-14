import { useState, useEffect } from "react";
import { Alert } from "react-native";

type FetchFunction<T> = () => T | Promise<T>;

const useAppwrite = <T>(func: FetchFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = func();
        const resolvedData = result instanceof Promise ? await result : result;
        setData(resolvedData);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "An unknown error occurred";
        Alert.alert("Error", errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
