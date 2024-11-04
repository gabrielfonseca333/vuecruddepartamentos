<template>
  <div>
    <h1>Modificar Departamento</h1>
    <div class="tarjeta">
        <input v-model="idDepartamento" type="number" placeholder="idDepartamento" class="form-control" disabled/>
        <input v-model="nombre" type="text" placeholder="nombre" class="form-control"/>
        <input v-model="localidad" type="text" placeholder="localidad" class="form-control"/>
        <button @click="modificarDepartamento()" class="btn btn-warning">Modificar</button>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos"
const service = new ServiceEjemplos();

export default {
    name: "ModificarDepartamento",
    data(){
        return{
            idDepartamento: 0,
            nombre:"",
            localidad: ""
        }
    },
    methods:{
        redirectToHome(){
            this.$router.push("/")
        },
        modificarDepartamento(){
            let departamento={
                idDepartamento: this.idDepartamento,
                nombre: this.nombre,
                localidad: this.localidad
            }
            service.modificarDepartamento(departamento).then(result=>{
                console.log(result)
                this.redirectToHome();
            })
        }
    },
    mounted(){
        this.idDepartamento = this.$route.params.idDepartamento
        this.nombre = this.$route.params.nombre
        this.localidad = this.$route.params.localidad
    }
}
</script>

<style>
@import "./../assets/css/styles"
</style>