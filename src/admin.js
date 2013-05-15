/**
 * 管理工具条
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function (require) {

	var $ = require('jquery');
	var mustache = require('mustache');
	var template = require('template');
	var page = require('page');

	var admin = {

		// 插入管理工具条
		__create: function () {

			var role = $.parseJSON(press.role);

			$('html').addClass('press-html');
			$('body').append(mustache.render(template.TEMPLATE_ADMIN, {

				// 页面状态参数
				is_design: press.status === 'design',
				is_maintain: press.status === 'maintain',

				// 普通参数
				site: press.site,
				page: press.page,
				message: press.message,
				template: press.template === 'true',

				// 角色控制参数
				grant: role.grant,
				create: role.create,
				maintain: role.maintain,
				publish: role.publish

			}));

		},

		// 绑定事件
		__bind: function () {

			var doc = $(document);

			// 绑定保存事件
			doc.on('click', '.press-admin-save', function () {
				page.setAttribute();
			});

			// 升级模板
			doc.on('click', '.press-admin-upgrade', function (e) {
				e.preventDefault();
				if (confirm('确定要升级模板吗？')) {
					location.href = $(this).attr('href');
				}
			});

			// 选择模板
			doc.on('click', '.press-admin-reselect', function (e) {
				e.preventDefault();
				if (confirm('选择模板会导致已有数据丢失，确定吗？')) {
					location.href = $(this).attr('href');
				}
			});

		},

		// 初始化
		init: function () {

			this.__create();
			this.__bind();

		}

	};

	// 执行初始化
	admin.init();

});