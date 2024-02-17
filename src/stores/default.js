export const useDefaultStore = defineStore('default', () => {
	const count = ref(0);
  
	return { count };
});