const middleware = {}

middleware['adminMiddleware'] = require('..\\middleware\\adminMiddleware.ts')
middleware['adminMiddleware'] = middleware['adminMiddleware'].default || middleware['adminMiddleware']

middleware['serverMiddleware'] = require('..\\middleware\\serverMiddleware.ts')
middleware['serverMiddleware'] = middleware['serverMiddleware'].default || middleware['serverMiddleware']

export default middleware
