import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue"
import CrearDepartamento from "./components/CrearDepartamento.vue"
import ModificarDepartamento from "./components/ModificarDepartamento.vue"

const myRoutes = [
    {path:"/", component: DepartamentosComponent},
    {path:"/crear", component: CrearDepartamento},
    {path:"/modificar/:idDepartamento?/:nombre?/:localidad?", component: ModificarDepartamento}
]

const router = createRouter({
    history: createWebHistory(),
    routes:myRoutes
})

export default router