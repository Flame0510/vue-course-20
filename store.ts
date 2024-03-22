import { reactive } from 'vue';

//STORE "loader" RICHIAMABILE OVUNQUE
export const loader = reactive({
  //STATE
  loading: true,

  //ACTION
  setLoading(value: boolean) {
    this.loading = value;
  }
});

//UTILIZZO COME REDUX CON SELECTOR
export const store = reactive({
  loader
});
