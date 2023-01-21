export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","global.css"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-d17ff862.js","imports":["_app/immutable/start-d17ff862.js","_app/immutable/chunks/index-e2dc4700.js","_app/immutable/chunks/singletons-36c5a035.js","_app/immutable/chunks/index-f96438b6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/user/login",
				pattern: /^\/user\/login\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/user/login/_server.js')
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/work/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
