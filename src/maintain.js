/**
 * 编辑内容渲染
 * 注：渲染编辑状态下的工具条
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function (require) {

	var $ = require('jquery');
	var mustache = require('mustache');
	var template = require('template');
	var page = require('page');

	var maintain = {

		// 设置模块工具条
		__setModuleAdmin: function () {

			var todo = $.parseJSON(press.todo),
				tce = $.parseJSON(press.tce);

			$('.J_Module').each(function (k, v) {

				var guid = $(v).attr('data-guid'),
					search = $(v).find('input:first-child').val(),
					status = '';

				// 渲染未完成标签
				if ($.inArray(guid, tce) !== -1) {
					$(v).append('<div class="press-base press-maintain-todo">!</div>');
				}

				// 判断是否动态模块
				if ($.inArray(guid, todo) !== -1) {
					status = '动态：';
				}

				// 判断保存类型
				if (search.indexOf('draft') === -1) {
					status += '已正式保存';
				} else {
					status += '已保存草稿';
				}

				// 渲染模块工具条
				$(v).append(mustache.render(template.TEMPLATE_MAINTAIN_ADMIN, {
					status: status,
					src: '/page/module.htm?' + search
				}));
			});

		},

		// 创建编辑器
		__editor: function (src) {

			var editor = $('<div class="press-base press-maintain-editor"></div>'),
				iframe = document.createElement('iframe');

			// 设置编辑器属性
			iframe.width = '100%';
			iframe.height = '100%';
			iframe.src = src;

			// 监听编辑器家在完成事件
			$(iframe).on('load', function () {
				page.unloading();
			});
			page.loading();

			// 插入编辑器
			editor.append(iframe);
			editor.append('<style>html,body{overflow:hidden!important;}</style>');
			editor.appendTo('body');

		},

		// 绑定悬停切换事件
		__toggleCls: function (trigger, cls) {

			$(document).on('mouseenter mouseleave', trigger, function (e) {
				if (e.type === 'mouseenter') {
					$(this).siblings().removeClass(cls);
					$(this).addClass(cls);
				}
				if (e.type === 'mouseleave') {
					$(this).removeClass(cls);
				}
			});

		},

		// 绑定页面操作事件
		__bind: function () {

			var self = this, doc = $(document);

			// 绑定模块悬停事件
			self.__toggleCls('.J_Module', 'press-maintain');

			// 绑定模块编辑事件
			doc.on('click', '.press-maintain-edit', function () {
				self.__editor($(this).attr('data-src'));
			});

			// 根据鼠标位置触发模块选中
			doc.one('mousemove', function (e) {
				$(e.target).trigger('mouseenter');
			});

			// 定义编辑器关闭方法
			// @see http://tms.taobao.com/js/module.source.js
			window.TMS = { DialogMgr: { hideDialog: function () {
				$('.press-maintain-editor').remove();
			}}};

		},

		// 初始化
		init: function () {

			this.__setModuleAdmin();
			this.__bind();

			// 编辑器需要在根域名
			if (location.host.indexOf('taobao.com') !== -1) {
				document.domain = 'taobao.com';
			}

		}

	};

	// 执行初始化
	maintain.init();

});