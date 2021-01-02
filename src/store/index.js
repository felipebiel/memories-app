import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            memories: [
                {
                  img: "https://picsum.photos/500/300?random=1",
                  id: 1,
                  title: "Felipe Biel",
                },
                {
                  img: "https://picsum.photos/500/300?random=2",
                  id: 2,
                  title: "Davi Biel",
                },
                {
                  img: "https://picsum.photos/500/300?random=3",
                  id: 3,
                  title: "Marlucia de Souza",
                },
              ],
        }
    },
    getters: {
        memories(state){
            return state.memories
        }
    }
})

export default store;