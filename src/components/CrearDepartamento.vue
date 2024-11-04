<template>
  <div>
    <h1>Crear Departamento</h1>
    <div class="tarjeta">
        <input v-model="idDepartamento" type="number" placeholder="idDepartamento" class="form-control"/>
        <input v-model="nombre" type="text" placeholder="nombre" class="form-control"/>
        <input v-model="localidad" type="text" placeholder="localidad" class="form-control"/>
        <button @click="crearDepartamento()" class="btn btn-primary">Crear</button>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos"
const service = new ServiceEjemplos();

export default {
    name: "CrearDepartamento",
    data(){
        return{
            idDepartamento: 0,
            nombre:"",
            localidad:""
        }
    },
    methods:{
        redirectToHome(){
            this.$router.push("/")
        },

        crearDepartamento(){
            let departamento={
                idDepartamento: this.idDepartamento,
                nombre: this.nombre,
                localidad: this.localidad
            }
            service.crearDepartamento(departamento).then(result=>{
                console.log("En el component, añadido?? 🐲", result)
                this.redirectToHome()
            })

        }
    }
}
</script>

<style>
@import "./../assets/css/styles";
</style>