import * as PIXI from "pixi.js";
import Sound from "pixi-sound";
import Stats from "stats.js";

const app = new PIXI.Application({
    backgroundColor: 0x000000
});

function init() {
    // load assets and fonts
    document.getElementById("game-body").appendChild(app.view);
    setup();
}

function setup() {
    let stats = new Stats();
    stats.showPanel(0);
    document.getElementById("game-body").appendChild(stats.dom);

    // game loop
    app.ticker.add((delta) => {
        stats.begin();

        // update game here

        stats.end();
    });
}

init();