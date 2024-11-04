import axios from "axios";
import Global from "@/Global";

export default class ServiceEjemplo{

    getDepartamentos(){
        return new Promise(function(resolve){
            let departamentos = []
            let request = "api/departamentos"
            let url = Global.urlApiEjemeplos + request
            axios.get(url).then(response=>{
                departamentos=response.data
                resolve(departamentos)
            })
        })
    }

    crearDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos"
            let url = Global.urlApiEjemeplos + request
            axios.post(url, departamento).then(response=>{
                resolve("⭐Dept creado",response)
            })
        })
    }

    modificarDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos"
            let url = Global.urlApiEjemeplos + request
            axios.put(url, departamento).then(response=>{
                resolve("✅Modificado",response)
            })
        })
    }

    eliminarDepartamento(idDepartamento){
        return new Promise(function(resolve){
            let request = "api/departamentos/" + idDepartamento
            let url = Global.urlApiEjemeplos + request
            axios.delete(url).then(response=>{
                resolve(response)
                console.log("Eliminado! ❌")
            })
        })
    }

}