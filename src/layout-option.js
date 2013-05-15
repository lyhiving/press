/**
 * 布局选项
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function (require) {

	var $ = require('jquery');
	var mustache = require('mustache');
	var template = require('template');
	var overlay = require('overlay');

	return {

		// 获取内容节点
		__getContent: function (grid) {

			var units = [],
				types = [], explore;

			// 计算布局单元
			grid.replace(/[a-z][0-9]+/g, function (match) {
				units.push(match);
			});

			// 计算布局全排列
			explore = function (s, r) {
				var grids = $.parseJSON(press.grids),
					type = 'grid-' + r.join(''),
					len = s.length, i = 0;
				if ((len === 0) && ($.inArray(type, grids) !== -1)) {
					types.push({
						grid: type,
						selected: grid === type
					});
				} else {
					for (; i < len; i++) {
						explore(s.slice(0, i).concat(s.slice(i + 1)), r.concat(s[i]));
					}
				}
			};
			explore(units, []);

			// 对非标准布局特殊处理
			if (grid === 'grid-m') {
				types = [{
					grid: grid,
					selected: true
				}];
			}

			// 渲染并构建内容节点
			return $(mustache.render(template.TEMPLATE_LAYOUT_OPTION, {
				types: types,
				grid: grid
			}));

		},

		// 更换布局
		__change: function (container, layout, grid) {

			var selected = container.find('.press-grid-selected');
			layout.removeClass(grid);
			layout.addClass(selected.attr('data-grid'));

		},

		// 创建布局选项
		__create: function (config) {

			// 配置参数
			var self = this,
				layout = config.layout,
				grid = config.grid;

			// 配置对话框
			$.overlay({
				title: '设置布局结构',
				content: function () {
					return self.__getContent(grid);
				},
				ok: '设置好了，看看效果',
				onOk: function (container, close) {
					self.__change(container, layout, grid);
					close();
				},
				afterRenderUI: function () {
					self.__bind();
				},
				type: 'small'
			});

		},

		// 绑定事件
		__bind: function () {

			var cls = 'press-grid-selected';

			// 绑定布局选择
			$('.press-layout-option-selectable').on('click', '.press-grid', function () {

				$(this).siblings().removeClass(cls);
				$(this).addClass(cls);

			});

		},

		// 初始化
		init: function (config) {

			this.__create(config);

		}

	};

});