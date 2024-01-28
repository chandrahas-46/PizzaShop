import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderSelector, action } from '../Redux/Reducers/orderReducers';

const MainSection = () => {
  const dispatch = useDispatch();
  const orders = useSelector(OrderSelector);
//   console.log("mainSECTION: ", orders);

  const handleCancelOrder = (id) => {
    dispatch(action.cancelOrder(id));
  };

  const totalDeliveredToday = orders.filter((order) => order.stage === 'Order Picked').length;
  const formattedTotalDeliveredToday = totalDeliveredToday.toLocaleString('en-US', { minimumIntegerDigits: 3 });

  return (
    <div className="main_section">
      <h2>Main Section</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Stage</th>
            <th>Total Time Spent<br />(Time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.filter((order) => order.stage !== 'Order Picked')
          .map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.stage}</td>
              <td>{order.totalTimeFormatted}</td>
              <td>
                {order.stage === 'Order Placed' || order.stage === 'Order in Making' ? (
                  <button onClick={() => handleCancelOrder(order.id)}>Cancel Order</button>
                ) : null}
              </td>
            </tr>
          ))}
          {/* <tr>
            <td colSpan="4" className="last_row">
              <h5>Total Order Delivered : {orders.filter((order) => order.stage === 'Order Picked').length}</h5>
            </td>
          </tr> */}
        </tbody>

        <tfoot>
            <tr>
                <td colSpan="2"> Total Order Delivered </td>
                <td colSpan="2"> {formattedTotalDeliveredToday} </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MainSection;
