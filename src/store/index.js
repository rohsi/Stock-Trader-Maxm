import Vue from 'vue';
import Vuex from 'vuex';
import { appendFile } from 'fs';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:[
        {id:1,name:"Apple",price:123},
        {id:2,name:"BMW",price:250},
        {id:3,name:"TATA",price:1500}
    ]
})