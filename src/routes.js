import diaries from './components/Diaries.vue';
import createDiary from './components/CreateDiary';
import singleDiary from './components/SingleDiary';

export default [
	{path:'/', component:diaries},
	{path:'/diary/:id', component:singleDiary},
	{path:'/create', component:createDiary}
]
