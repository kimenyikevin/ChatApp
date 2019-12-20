import proxy from 'http-proxy-middleware';

export const prox = (app) => {
    app.use(
        '/api/vi/*',
        proxy({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      );
}
