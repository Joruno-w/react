import React from "react";
import App from "./App";
import dva from 'dva';
import Counter from "./models/Counter";

const app = dva();

app.model(Counter);
app.router(App);
app.start("#root");
