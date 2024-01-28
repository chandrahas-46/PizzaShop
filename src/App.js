// import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './Components/Navbar';
import OrderForm from './Components/orderForm';
import StageSection from './Components/stageSection';
import MainSection from './Components/mainSection';
import { action } from './Redux/Reducers/orderReducers';
import './App.css';

// Update timers every second
function App() {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmitOrder = (orderData) => {
    dispatch(action.addOrder(orderData));
    setIsFormOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(action.updateTimers());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <h4> Please click the button for order your new Pizza </h4>
      <button onClick={toggleForm} className='orderButton'> {isFormOpen ? "Close Form" : "Order Now"} </button>
      {isFormOpen && <OrderForm onClose={handleFormClose} onSubmit={handleSubmitOrder} />}
      {/* <OrderForm /> */}
      <StageSection />
      <MainSection />
    </div>
  );
}
export default App;
