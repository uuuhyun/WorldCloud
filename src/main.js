import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18+용 import
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('app')); // ✅ id="app"에 마운트
root.render(<App />);