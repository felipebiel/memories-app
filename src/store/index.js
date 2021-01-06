import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            memories: [
                {
                  img: "https://picsum.photos/500/300?random=1",
                  id: 1,
                  title: "Felipe Biel",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sapien a dui condimentum tristique. Etiam id felis id nibh efficitur consectetur a in sem. "
                },
                {
                  img: "https://picsum.photos/500/300?random=2",
                  id: 2,
                  title: "Davi Biel",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sapien a dui condimentum tristique. Etiam id felis id nibh efficitur consectetur a in sem. "
                },
                {
                  img: "https://picsum.photos/500/300?random=3",
                  id: 3,
                  title: "Marlucia de Souza",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sapien a dui condimentum tristique. Etiam id felis id nibh efficitur consectetur a in sem. "
                },
              ],
        }
    },
    getters: {
        memories(state){
            return state.memories
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id == memoryId);
            }
        }
    }
})

export default store;