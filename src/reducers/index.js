import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';

// WebSocket client code
const socket = new WebSocket('wss://example.com/socket');

// Connection opened event
socket.onopen = function(event) {
  console.log('WebSocket connection opened');
  // You can dispatch an action here to indicate that the WebSocket connection is established
};

// Message received event
socket.onmessage = function(event) {
  const message = event.data;
  console.log('Received message from server:', message);
  // You can dispatch an action here with the received message to update the Redux store
};

// Connection closed event
socket.onclose = function(event) {
  console.log('WebSocket connection closed');
  // You can dispatch an action here to handle the WebSocket connection closure
};

// Error event
socket.onerror = function(error) {
  console.error('WebSocket error:', error);
  // You can dispatch an action here to handle WebSocket errors
};

const rootReducer = combineReducers({
  auth: authReducer,
  reviews: reviewReducer,
  error: errorReducer,
});

export default rootReducer;
