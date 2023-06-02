import {reactive} from 'vue';

export const store = reactive({

  baseURL: 'http://127.0.0.1:8000/',
  APIroute: 'api/projects',

  projects: '',

  isActive: false,

  mail: 'martina.piglio@gmail.com'

});