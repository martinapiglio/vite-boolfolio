import {reactive} from 'vue';

export const store = reactive({
  //urls
  baseURL: 'http://127.0.0.1:8000/',
  APIroute: 'api/projects',

  //data
  projects: '',
  types: [],

  //active link variable
  isActive: false,

  //mail info
  mail: 'martina.piglio@gmail.com'

});