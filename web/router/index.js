import {createRouter as _createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes.js';

export async function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes
  });
}
