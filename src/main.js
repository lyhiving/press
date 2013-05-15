/**
 * 配置资源并启动加载
 * @author 邦彦<bangyan@taobao.com>
 */
press.seajs.use((function () {

	// 设计状态配置
	if (press.status === 'design') {
		return [
			'press.css',
			'admin',
			'admin.css',
			'jquery',
			'jquery.html5sortable',
			'jquery.jqdnr',
			'layout',
			'layout-add',
			'layout-option',
			'layout.css',
			'module',
			'module-add',
			'module-option',
			'module.css',
			'mustache',
			'overlay',
			'overlay.css',
			'page',
			'page.css',
			'plugin-area',
			'plugin.css',
			'render',
			'render.css',
			'template'
		];
	}

	// 编辑状态配置
	if (press.status === 'maintain') {
		return [
			'press.css',
			'admin',
			'admin.css',
			'jquery',
			'mustache',
			'page',
			'page.css',
			'maintain',
			'maintain.css',
			'template'
		];
	}

})());