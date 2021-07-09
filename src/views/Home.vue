<template>
  <div class="home">
    <h1>Tareas📘</h1>
    <div class="tarea">
      <label for="newTarea">Tarea</label>
      <input class="crear" type="text" v-model="tareaNombre" id="newTarea">
      <button @click="addTarea">OK</button>
      <div class="lista">
      <ul v-for="tarea of tareas" :key="tarea.id">
        <li>
          <textarea v-model="tarea.tarea" @change="edit(tarea.tarea)"></textarea>
          <!-- <button type="submit" @click="updateTarea(tarea.id)" class="btn btn-warning">✏️</button> -->
          <button @click="deleteTarea(tarea.id)" class="btn btn-danger">❌</button>
        </li>
      </ul>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {tareaService} from "@/services/tareaService";

export default {
  name: 'Home',
  components: {
    
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

    // edit(tarea) {
    //   this.updatedTarea = tarea
    // },

    // async updateTarea(id) {
    //   const res = await tareaService.updateTarea(id)
    //   this.tareas = res.data
    // }
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
  background-color: #8FBAC6;
  border-color: black;
}
</style>