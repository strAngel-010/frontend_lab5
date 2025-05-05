import { Application, Assets, Container, Graphics } from 'pixi.js';

(async () => {
    const app = new Application();
    await app.init({ background: '#1099bb', resizeTo: window });
    document.body.appendChild(app.canvas);
    
    const rect = new Graphics()
        .rect(-50, -25, 100, 50)
        .fill(0xFF0000);
    
    rect.position.set(app.screen.width / 2, app.screen.height / 2);
    app.stage.addChild(rect);

    app.ticker.add((time) => {
        rect.rotation -= 0.01 * time.deltaTime;
    });
})();
