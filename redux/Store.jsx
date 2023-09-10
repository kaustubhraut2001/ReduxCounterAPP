import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Counter';
const Store = configureStore({

	name: 'counter',
	reducer: {
		counter : counterSlice ,
	},

});

export default Store;