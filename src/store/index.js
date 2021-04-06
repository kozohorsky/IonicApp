import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      list: [
        {
          id: "1",
          image:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
          nazev: "Chleba",
          popis: "Psenicny",
        },
        {
          id: "2",
          image:
            "https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          nazev: "Zelenina",
          popis: "Rajcata, Brokolice",
        },
        {
          id: "3",
          image:
            "https://images.unsplash.com/photo-1586999528871-ded77bc9656c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1001&q=80",
          nazev: "Ovoce",
          popis: "Pomeranc, banan, Mandarinky",
        },
        {
          id: "4",
          image:
            "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
          nazev: "Mouka",
          popis: "Zitna a hruba",
        },
      ],
    };
  },
  mutations: {
    addItem(state, itemData) {
      const newItem = {
        id: new Date().toISOString(),
        nazev: itemData.nazev,
        image: itemData.image,
        popis: itemData.popis,
      };
      state.list.unshift(newItem);
    },
  },
  actions: {
    addItem(context, itemData) {
      context.commit("addItem", itemData);
    },
  },
  getters: {
    list(state) {
      return state.list;
    },
    item(state) {
      return (itemId) => {
        return state.list.find((item) => item.id === itemId);
      };
    },
  },
});

export default store;
