import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue'
import SobreMi from '../views/SobreMi.vue'
import Contacto from '../views/Contacto.vue'
import Post from '../views/Post.vue'
import Articulo from '../views/Articulo.vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sobremi',
    name: 'Sobre mi',
    component: SobreMi
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
  path: '/post/:articulo',
  name: 'Post',
  component: Post,
  children: [
      {
        path: '',
        component: Articulo
      },
    ],
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
