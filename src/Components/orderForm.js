import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../Redux/Reducers/orderReducers';
import { OrderSelector } from '../Redux/Reducers/orderReducers';

const OrderForm = () => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');
  const dispatch = useDispatch();
  const orders = useSelector(OrderSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !size || !base) {
      alert('Please fill in all fields.');
      return;
    }
    if (orders.filter((order) => order.stage !== 'Order Picked').length >= 10) {
      alert('Not taking any order for now');
      return;
    }
    dispatch(action.addOrder({ type, size, base }));
    setType('');
    setSize('');
    setBase('');
  };

  return (
    <div className="pizza_form">
      <h2>Order Your Pizza</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
            <label>Type:</label>
            <label className="radio_label">
              <input
                type="radio"
                name="type"
                value="Veg"
                checked={type === 'Veg'}
                onChange={() => setType('Veg')}
              />
              Veg
            </label>
            <label className="radio_label">
              <input
                type="radio"
                name="type"
                value="Non-Veg"
                checked={type === 'Non-Veg'}
                onChange={() => setType('Non-Veg')}
              />
              Non-Veg
            </label>
        </div>
        <div className="input_group">
          <label>Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)} required>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </div>
        <div className="input_group">
          <label>Base:</label>
          <select value={base} onChange={(e) => setBase(e.target.value)} required>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
