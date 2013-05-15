press.seajs.config({

	// 指定需要使用的插件
	plugins: [],

	// 别名配置
	alias: {
		'press.css': 'press.css',
		'admin': 'admin.js',
		'admin.css': 'admin.css',
		'jquery': 'libs/jquery/2.0.0/jquery.js',
		'jquery.html5sortable': 'libs/jquery.html5sortable/1.0.0/jquery.html5sortable.js',
		'jquery.jqdnr': 'libs/jquery.jqdnr/1.0.0/jquery.jqdnr.js',
		'layout': 'layout.js',
		'layout-add': 'layout-add.js',
		'layout-option': 'layout-option.js',
		'layout.css': 'layout.css',
		'maintain': 'maintain.js',
		'maintain.css': 'maintain.css',
		'module': 'module.js',
		'module-add': 'module-add.js',
		'module-option': 'module-option.js',
		'module.css': 'module.css',
		'mustache': 'libs/mustache/0.7.2/mustache.js',
		'overlay': 'overlay',
		'overlay.css': 'overlay.css',
		'page': 'page.js',
		'page.css': 'page.css',
		'plugin-area': 'plugin-area.js',
		'plugin.css': 'plugin.css',
		'render': 'render.js',
		'render.css': 'render.css',
		'template': 'template.js'
	},

	// 映射配置
	map: [
		[ /^(.*\.(?:css|js))(.*)$/i, '$1?v=' + press.version ]
	],

	// 调试模式
	debug: false,

	// 路径配置
	base: press.base,

	// 文件编码
	charset: 'utf-8'

});