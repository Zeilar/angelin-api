import { App } from "@app";

function bootstrap() {
    const app = new App();
    app.start();
    return app;
}

export const app = bootstrap();
