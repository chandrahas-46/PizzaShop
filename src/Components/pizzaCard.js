import React from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../Redux/Reducers/orderReducers';

const PizzaCard = ({ order }) => {
  // console.log("PIZZACARD: ", order);
  // const { id, type, size, base, stage, timerFormatted } = order;
  const { id, size, stage, timer, timerFormatted } = order;
  const dispatch = useDispatch();

  const handleNextStage = () => {
    dispatch(action.moveNextStage(id));
  };

  // const handleCancel = () => {
  //   dispatch(action.cancelOrder(id));
  // };

  // Determine if the pizza is in the same stage for more than 3 minutes - small, 4 minutes - medium, 5 minutes - large 
  // const isDelayed = stage !== 'Order Picked' && timer > 180;
  const isDelayed = stage !== 'Order Picked' && ((size === "Small" && timer > 180) || (size === "Medium" && timer > 240) || (size === "Large" && timer > 300));

  return (
    <div className={`pizza_card ${isDelayed ? 'delayed' : ''}`}>
    {/* <div className={`pizza-card ${stage === 'Order Ready' ? 'ready' : ''}`}> */}
      <h5>Order Id: {id.toLocaleString('en-US', { minimumIntegerDigits: 3 })}</h5>
      {/* <p>Type: {type}</p>
      <p>Size: {size}</p>
      <p>Base: {base}</p>
      <p>Stage: {stage}</p> */}
      {/* <p>{timerFormatted}</p> */}
      <p>{stage === 'Order Picked' ? 'Picked' : timerFormatted}</p>
      {stage === 'Order Picked' ? '' : <button onClick={handleNextStage}>Next</button>}
      
      {/* <button onClick={handleCancel}>Cancel</button> */}
    </div>
  );
};

export default PizzaCard;
