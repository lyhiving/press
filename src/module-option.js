/**
 * 模块选项
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function (require) {

	var $ = require('jquery');
	var mustache = require('mustache');
	var template = require('template');
	var overlay = require('overlay');
	var page = require('page');

	return {

		// 获取内容节点
		__getContent: function (config) {

			return $(mustache.render(template.TEMPLATE_MODULE_OPTION, {
				skin: config.skin
			}));

		},

		// 设置皮肤字段结构、历史皮肤、站点色卡
		__setFieldHistoryColors: function (config) {

			var self = this,
				COLORS = template.TEMPLATE_MODULE_OPTION_COLORS;

			// 设置皮肤字段结构
			$.ajax({
				dataType: 'jsonp',
				url: press.api + '?method=tms.module.get.skins',
				data: {
					page: press.page,
					name: config.name,
					skin: config.skin,
					_input_charset: 'utf-8'
				},
				success: function (d) {
					var field = [];
					$.each(d.data, function (k, v) {
						field.push(mustache.render(template.TEMPLATE_MODULE_OPTION_FIELD, v));
					});
					$('.press-module-option-form').append(field.join(''));
					self.__setDisabled(true);
				}
			});

			// 设置历史皮肤
			$.ajax({
				dataType: 'jsonp',
				url: press.api + '?method=tms.module.get.skins',
				data: {
					page: press.page,
					name: config.name,
					_input_charset: 'utf-8'
				},
				success: function (d) {
					var history = [];
					$.each(d.data, function (k, v) {
						history.push('<a href="javascript:;">' + v + '</a>');
					});
					$('.press-module-option-history').append(history.join(''));
				}
			});

			// 设置站点色卡
			$('.press-module-option-colors').append(mustache.render(COLORS, {
				colors: $.parseJSON(press.colors)
			}));

		},

		// 设置字段禁用状态
		__setDisabled: function (disabled) {

			var fields = $('.press-module-option-form .press-form-text'),
				cls = 'press-form-text-disabled';

			fields.attr('disabled', disabled);
			disabled ? fields.addClass(cls) : fields.removeClass(cls);

		},

		// 导入历史皮肤
		__import: function (trigger, config) {

			var self = this,
				skin = trigger.text(), field;

			$.ajax({
				dataType: 'jsonp',
				url: press.api + '?method=tms.module.get.skins',
				data: {
					page: config.page,
					name: config.name,
					skin: skin,
					_input_charset: 'utf-8'
				},
				success: function (d) {
					$('.press-module-option-name').val(skin);
					$.each(d.data, function (k, v) {
						field = $('.press-module-option-field[name=' + v.key + ']');
						field.val(v.value);
					});
					self.__setDisabled(true);
				}
			});

		},

		// 更换皮肤
		__change: function (config, callback) {

			var module = config.module,
				id = 'skin-' + config.guid,
				data = $('.press-module-option-form').serializeArray(),
				skin = $.trim($('.press-module-option-name').val());

			$.ajax({
				type: 'post',
				url: press.api + '?method=tms.module.set.skin',
				data: {
					page: press.page,
					name: config.name,
					skin: skin,
					data: JSON.stringify(data),
					_input_charset: 'utf-8'
				},
				beforeSend: function () {
					page.loading();
				},
				complete: function () {
					page.unloading();
				},
				success: function (d) {
					if (d.code === 200) {
						$('#' + id).remove();
						module.attr({
							'class': 'J_Module skin-' + skin,
							'data-skin': skin
						});
						module.prepend($('<style id="' + id + '"></style>').html(d.data));
						callback();
					} else {
						alert(d.message);
					}
				},
				dataType: 'json'
			});

		},

		// 创建模块选项
		__create: function (config) {

			var self = this;

			// 配置对话框
			$.overlay({
				title: '设置模块皮肤',
				content: function () {
					return self.__getContent(config);
				},
				ok: '设置好了，看看效果',
				onOk: function () {
					$('.press-module-option-submit').trigger('click');
				},
				afterRenderUI: function (container, close) {
					self.__setFieldHistoryColors(config);
					self.__bind(config, close);
				},
				type: 'small'
			});

		},

		// 绑定事件
		__bind: function (config, close) {

			var self = this;

			// 绑定历史皮肤选择
			$('.press-module-option-selectable').on('click', function () {
				$(this).next().slideToggle('fast');
			});

			// 绑定历史皮肤导入
			$('.press-module-option-history').on('click', 'a', function () {
				self.__import($(this), config);
			});

			// 随机生成皮肤名称
			$('.press-module-option-edit').on('click', function () {
				$('.press-module-option-name').val(new Date().getTime());
				self.__setDisabled(false);
			});

			// 绑定皮肤表单提交
			$('.press-module-option-form').on('submit', function (e) {
				e.preventDefault();
				self.__change(config, close);
			});

		},

		// 初始化
		init: function (config) {

			this.__create(config);

		}

	};

});