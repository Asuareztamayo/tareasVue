import axios from 'axios'

const baseUrl = "http://localhost:3000/"

export const tareaService = {
    getAll() {
        return axios.get(baseUrl + "tareas")
    },
    
    addTarea(newTarea) {
        axios.post(baseUrl + "tareas", {
            tarea: newTarea, isFinished: false
        })
        return this.getAll()
    },

    updateTarea(id){
        axios.patch(baseUrl + "tareas/" + id, {
            tarea: this.updatedTarea
        })
        return this.getAll()
    },

    deleteTarea(id) {
        axios.delete(baseUrl + "tareas/" + id)
        return this.getAll()
    }

}