export const helloRoute = {
    method: 'GET',
    path: '/hello',
    handler: async (req, h) => {
        return 'Hello from Hapi!';
    },
};