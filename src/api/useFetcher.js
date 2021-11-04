import { Ref, ref } from 'vue';

export function useFetcher(fetcher) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const getData = async (...params) => {
    loading.value = true;
    data.value = null;
    error.value = null;

    try {
      data.value = await fetcher(...params);
    } catch (error) {
      error.value = error;
    }

    loading.value = false;
  };

  return {
    data,
    loading,
    error,
    getData,
  };
}
