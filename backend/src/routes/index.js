import userRouter from "./userRoutes.js";

function routes(app) {
    app.use("/user", userRouter);
}

export { routes };
