import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import Products from "./Pages/Products.jsx";
import Order from "./Pages/Order.jsx";
import Payment from "./Pages/Payment.jsx";
import MediaManager from "./Pages/MediaManager.jsx";
import Messages from "./Pages/Messages.jsx";
import Home from "./Pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Order" element={<Order />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Media_Manager" element={<MediaManager />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
