import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Item, { status } from "./components/Item/Item.tsx";

// default css
import './index.css';

// emulating the databse I would have
const games = [
    { name: "Little Big Planet", progress: 50, status: status.PLAYING },
    { name: "Raymen Legends", progress: 30, status: status.PLAYING },
    { name: "Deadlock", progress: -1, status: status.PLAYING }
];

const listItems = games.map(x => <Item name={ x.name } progress={ x.progress } status={ x.status } />);

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <h2 className="header">Games: </h2>
    <div className="listed-items">{ listItems }</div>
  </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
