import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Counterslice';
const Store = configureStore({


	reducer: {
		counter : counterSlice ,
	},

});

export default Store;