/**
 * 模块操作
 * 注：集合了基本的模块操作功能
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function (require) {

	var $ = require('jquery');
	var html5sortable = require('jquery.html5sortable');
	var mustache = require('mustache');
	var template = require('template');
	var module_add = require('module-add');
	var module_option = require('module-option');
	var plugin_area = require('plugin-area');

	var module = {

		// 重置区块工具条尺寸
		__resize: function (trigger) {

			var layout = $(trigger).parents('.J_Layout'),
				admin = layout.find('.press-region-admin'),
				height = [];

			layout.find('.J_Region').each(function (k, v) {

				if ($(v).children('.J_Module').length > 0) {
					height.push($(v).height());
				} else {
					height.push(150);
				}

			});

			admin.animate({
				height: height.sort().pop()
			});

		},

		// 插件通知执行
		__plugin: function (module) {

			var name = module.attr('data-name');

			// 执行图片热区插件
			if (name === 'press-area') {
				plugin_area.render(module);
			}

		},

		// 绑定事件
		__bind: function () {

			var self = this, doc = $(document);

			// 绑定添加模块事件
			doc.on('click', '.press-module-add', function () {

				var module = $(this).parents('.J_Module');

				// 配置“添加模块”
				// 注：传入参数为当前模块节点、模块宽度
				module_add.init({
					module: module,
					width: $(this).parents('.J_Region').attr('data-width'),
					guid: module.attr('data-guid'),
					plugin: function (module) {
						self.__plugin(module);
					}
				});

			});

			// 绑定区块中的添加模块事件
			doc.on('click', '.press-region-add', function () {

				var region = $(this).parents('.J_Region');

				// 配置“添加模块”
				// 注：传入参数为当前区块节点、模块宽度
				module_add.init({
					region: region,
					width: region.attr('data-width'),
					plugin: function (module) {
						self.__plugin(module);
					}
				});

			});

			// 绑定上移布局事件
			doc.on('click', '.press-module-up', function () {

				var module = $(this).parents('.J_Module');

				//如果存在前置模块，则调换位置
				if (module.prev('.J_Module').length !== 0) {
					module.insertBefore(module.prev('.J_Module'));
				}

			});

			// 绑定下移模块事件
			doc.on('click', '.press-module-down', function () {

				var module = $(this).parents('.J_Module');

				//如果存在后置模块，则调换位置
				if (module.next('.J_Module').length !== 0) {
					module.insertAfter(module.next('.J_Module'));
				}

			});

			// 绑定删除模块事件
			doc.on('click', '.press-module-remove', function () {

				var layout = $(this).parents('.J_Layout'),
					region = $(this).parents('.J_Region'),
					module = $(this).parents('.J_Module');

				// 隐藏模块并删除
				confirm('确定要删除模块吗？') && module.fadeOut(function () {

					$(this).remove();

					if (region.children('.J_Module').length === 0) {
						region.append(mustache.render(template.TEMPLATE_REGION_ADMIN, {
							width: layout.hasClass('grid-m') ? '100%' : region.width(),
							height: 150
						}));
						self.__resize(region);
					}

				});

			});

			// 绑定设置模块事件
			doc.on('click', '.press-module-option', function () {

				var module = $(this).parents('.J_Module');

				// 配置“设置模块皮肤”
				// 注：传入参数为当前页面id、模块名称、模块皮肤名称
				module_option.init({
					module: module,
					page: press.page,
					name: module.attr('data-name'),
					skin: module.attr('data-skin'),
					guid: module.attr('data-guid')
				});

			});

			$('.J_Region').sortable({
				handle: '.press-module-mask',
				forcePlaceholderSize: true
			});

		},

		// 初始化
		init: function () {

			// 装载所有插件
			plugin_area.init();

			this.__bind();

		}

	};

	// 执行初始化
	module.init();

});