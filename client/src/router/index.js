import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import ProjectDetail from '@/views/Project.vue';

const router = createRouter({
     history: createWebHashHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },
          { path: "/project/joly-bell", name: "ProjectDetail", component: ProjectDetail },
          { path: "/:catchAll(.*)", redirect: { name: "Index" } }
     ],
});

export default router;