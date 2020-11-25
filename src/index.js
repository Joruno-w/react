import Counter from "./models/Counter";
import routerConfig from "./routerConfig";
import dva from "./dva";
import {createBrowserHistory} from "history";

const app = dva({
    history: createBrowserHistory()
});

app.model(Counter);
app.router(routerConfig);
app.start("#root");
