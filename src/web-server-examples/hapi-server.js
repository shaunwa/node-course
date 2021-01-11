import Hapi from '@hapi/hapi';
import { helloRoute } from './helloRoute';

const routes = [
    helloRoute,
];

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

routes.forEach(route => {
    server.route(route);
});

server.start()
    .then(() => console.log("Hapi server is listening on port 3000"));