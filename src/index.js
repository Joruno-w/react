import Counter from "./models/Counter";
import routerConfig from "./routerConfig";
import dva from "dva";
import {createBrowserHistory} from "history";
import createLoading from './dva/dva-loading';

const app = dva({
    history: createBrowserHistory()
});

app.use(createLoading());
app.model(Counter);
app.router(routerConfig);
app.start("#root");
