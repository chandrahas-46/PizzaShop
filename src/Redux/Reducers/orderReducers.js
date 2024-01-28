import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;
const initialState = {
  orders: [],
};

const getNextStage = (currentStage) => {
  switch (currentStage) {
    case 'Order Placed':
      return 'Order in Making';
    case 'Order in Making':
      return 'Order Ready';
    case 'Order Ready':
      return 'Order Picked';
    default:
      return currentStage;
  }
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { type, size, base } = action.payload;
      state.orders.push({
        id: nextId++,
        type,
        size,
        base,
        // Set initial stage
        stage: 'Order Placed',
        // Add timer property to track time spent in each stage
        timer: 0,
        totalTime: 0,
      });
    },

    moveNextStage: (state, action) => {
      state.orders.map((order) => {
        if(order.id === action.payload){
          order.stage = getNextStage(order.stage)
          // Reset timer when stage changes
          order.timer = 0;
          // order.totalTime = order.totalTime+1;
        }
        return order;
      })
    },

    // Replace orders after removing cancelled order
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter((order) => {
        return order.id !== action.payload;
      })
    },

    // Increment timer for orders not yet picked
    updateTimers: (state) => {
      state.orders.forEach((order) => {
        if (order.stage !== 'Order Picked') {
          order.timer++;
          order.totalTime++;

          // Convert timer to minutes and seconds
          const minutes = Math.floor(order.timer / 60);
          const seconds = order.timer % 60;
          order.timerFormatted = `${minutes} min ${seconds} sec`;

          // Convert timer to total minutes and total seconds
          const totalMinutes = Math.floor(order.totalTime / 60);
          const totalSeconds = order.totalTime % 60;
          order.totalTimeFormatted = `${totalMinutes} min ${totalSeconds} sec`;
        }
      });
    },
  },
});

export const orderReducer = ordersSlice.reducer;
export const action = ordersSlice.actions;
export const OrderSelector = (state) => state.orderReducer.orders;

