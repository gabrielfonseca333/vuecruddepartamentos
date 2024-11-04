<template>
  <div>
    <h1>Departamento Component "Home"</h1>
    
    <div class="tarjeta" style="background-color: #292727">
        <img src="./../assets/oval.svg" 
    v-if="status==false"/>
        <table v-else class="table table-dark">
            <thead>
                <tr>
                    <th>idDepartamento</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in departamentos" :key="dep">
                    <td>{{dep.idDepartamento}}</td>
                    <td>{{dep.nombre}}</td>
                    <td>{{dep.localidad}}</td>
                    <td><router-link class="btn btn-primary" :to="'/modificar/' + dep.idDepartamento +'/' + dep.nombre +'/'+dep.localidad">Modificar</router-link></td>
                    <td><button @click="eliminarDepartamento(dep.idDepartamento)" class="btn btn-danger" to="/">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos"
const service = new ServiceEjemplos();

export default {
    name: "DepartamentosComponent",
    data(){
        return{
            idDepartamento:0,
            departamentos:[],
            status:false
        }
    },
    mounted(){
        service.getDepartamentos().then(result=>{
            this.status = true;
            this.departamentos=result
        })
    },
    methods:{
        redirectToHome(){
            this.$router.push("/")
        },
        eliminarDepartamento(idDepartamento){
            service.eliminarDepartamento(idDepartamento).then(result=>{
                console.log(result, "eliminado! ❌❌🍪")
                window.location.reload();
            })
        }
    }

}
</script>

<style>
@import "./../assets/css/styles";
</style>