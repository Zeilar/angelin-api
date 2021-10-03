import { App } from "@api/index";

function bootstrap() {
    const app = new App();
    app.start();
    return app;
}

export const app = bootstrap();
