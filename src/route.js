import { createRouter,createWebHistory } from "vue-router";
import coachView from './components/layout/body/coach/coachView.vue'
import coachForm from './components/layout/body/coach/coachForm.vue'
import coachDetails from './components/layout/body/coach/coachDetails.vue'
import coachContact from './components/layout/body/coach/coachContact.vue'
import theRequests from './components/layout/body/requests/theRequest.vue'
import notFound from './components/layout/NotFound.vue'

const route = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},
        {path:'/coaches',  component: coachView,},
        {path:'/coaches/:id', component: coachDetails,props:true,
            children: [{path:'contact', component: coachContact}]
        },
        {path:'/createCoach',component: coachForm},
        {path: '/requests',component: theRequests},
        {path:'/:notFound(.*)', component: notFound}
    ]
})

export default route;