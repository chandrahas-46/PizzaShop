import React from 'react';
import PizzaCard from './pizzaCard';
import { useSelector } from 'react-redux';
import { OrderSelector } from '../Redux/Reducers/orderReducers';

const StageSection = () => {
  const orders = useSelector(OrderSelector);

  return (
    <>
    <h2> Pizza Stages Section </h2>
    
    <div className="container">
        <div className="column">
            <h5>Order Placed</h5><hr />
            {orders
            .filter((order) => order.stage === 'Order Placed')
            .map((order) => (
                <PizzaCard key={order.id} order={order} />
            ))}
        </div>
        <div className="column">
            <h5>Order in Making</h5><hr />
            {orders
            .filter((order) => order.stage === 'Order in Making')
            .map((order) => (
                <PizzaCard key={order.id} order={order} />
            ))}
        </div>
        <div className="column">
            <h5>Order Ready</h5><hr />
            {orders
            .filter((order) => order.stage === 'Order Ready')
            .map((order) => (
                <PizzaCard key={order.id} order={order} />
            ))}
        </div>
        <div className="column">
            <h5>Order Picked</h5><hr />
            {orders
            .filter((order) => order.stage === 'Order Picked')
            .map((order) => (
                <PizzaCard key={order.id} order={order} />
            ))}
        </div>
    </div>
    </>
  );
};

export default StageSection;
