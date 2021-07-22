<template>
  <div class="home">
    <h1>Tareas📘</h1>
    <AddToDo />
    <FilterToDos />
    <ToDos />
    <!-- <div class="tarea">
      <label for="newTarea">Tarea</label>
      <input class="crear" type="text" v-model="tareaNombre" id="newTarea">
      <button @click="addTarea">OK</button>
      <div class="lista">
      <ul v-for="tarea of tareas" :key="tarea.id">
        <li>
          <textarea v-model="tarea.tarea" @change="edit(tarea.tarea)"></textarea>
          <input
          class="form-check-input float-end"
          type="checkbox"
          v-model="tarea.isFinished"
          id="flexCheckDefault" @change="updateTask(tarea)"
        />

          <button type="submit" @click="updateTask(tarea.id)" class="btn btn-warning">✏️</button>
          <button @click="deleteTarea(tarea.id)" class="btn btn-danger">❌</button>
        </li>
      </ul>
      </div>

    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {tareaService} from "@/services/tareaService"
import AddToDo from '@/components/AddToDo.vue'
import FilterToDos from '@/components/FilterToDos.vue'
import ToDos from '@/components/ToDos.vue'

export default {
  name: 'Home',
  components: {
    AddToDo,
    FilterToDos,
    ToDos
  },
  updated(){
    this.updatedTarea()
  },
  mounted() {
    this.traerDatos()
  },
  data(){
    return {
      tareas : [],
      tareaNombre: "",
      updatedTarea: "",
      tarea: "",
    }
  },
  methods:{
    async traerDatos(){
      try{
        const res = await tareaService.getAll();
        this.tareas = res.data;
      } catch(e){
        console.error(e);
      }
    },
    async addTarea(){
      let newTarea = this.tareaNombre
      const res = await tareaService.addTarea(newTarea)
      this.tareas = res.data;
      this.tareaNombre= "";
      this.traerDatos();
      },
    
    async deleteTarea(id) {
      const res = await tareaService.deleteTarea(id)
      this.tareas = res.data
    },

    async updateTask(tarea) {
      var data = {
        id: tarea.id,
        tarea: tarea.tarea,
        isFinished: tarea.isFinished
      }
      const res = await tareaService.updateTarea(tarea.id, data)
      this.tareas = res.data
      this.$router.go();
    }
  }
    
}
</script>

<style lang="scss">
.crear{
  background-color: rgb(74, 160, 156);
}
.tarea{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.lista{
  display: flex;
  align-items: center;
  flex-direction: column;
}
input {
  border-color: black;
  margin: 20px;
}

textarea {
  background-color: rgb(99, 168, 165);
  border-color: black;
}

button {
  background-color: rgb(74, 160, 156);
  border-color: black;
}
</style>