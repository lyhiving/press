/**
 * 页面组件模板
 * 注：遵循 mustache 语法规则
 * @author 邦彦<bangyan@taobao.com>
 */
press.define(function () {

	return {

		// 管理工具条模板
		TEMPLATE_ADMIN: '<div class="press-base press-admin press-clearfix">' +
			'	<div class="press-admin-logo">' +
			'		<a href="design.htm?id={{page}}" title="淘宝模板管理系统 - 页面设计系统"></a>' +
			'	</div>' +
			'	<ul class="press-admin-menu press-clearfix">' +
			'		<li class="press-admin-item{{#is_design}} press-admin-current{{/is_design}}">' +
			'			<span class="press-admin-explore">' +
			'				<a href="design.htm?id={{page}}">设计页面</a>' +
			'			</span>' +
			'		</li>' +
			'		<li class="press-admin-item{{#is_maintain}} press-admin-current{{/is_maintain}}">' +
			'			<span class="press-admin-explore">' +
			'				<a href="maintain.htm?id={{page}}">编辑内容</a>' +
			'			</span>' +
			'		</li>' +
			'	</ul>' +
			'	<ul class="press-admin-action press-clearfix">' +
			'		{{#create}}' +
			'		<li class="press-admin-item press-admin-parent">' +
			'			<span class="press-admin-explore">' +
			'				<a href="javascript:;">其他操作<s></s></a>' +
			'			</span>' +
			'			<ul class="press-admin-submenu">' +
			'				{{#is_design}}' +
			'				<li><a href="/daogou/site/market/edit.htm?id={{page}}">页面信息设置</a></li>' +
			'				<li><a href="/daogou/site/market/pageStyle.htm?id={{page}}" target="_bank">发布皮肤文件</a></li>' +
			'				{{#grant}}' +
			'				<li><a href="/daogou/site/market/backGround.htm?id={{page}}">页面背景设置</a></li>' +
			'				{{#template}}' +
			'				<li><a class="press-admin-upgrade" href="/daogou/site/market/design.htm?action=prototype_action&event_submit_do_updateTemplate=anything&id={{page}}">升级模板</a></li>' +
			'				{{/template}}' +
			'				{{/grant}}' +
			'				<li><a class="press-admin-reselect" href="/daogou/site/market/chooseTemplate.htm?pageId={{page}}">选择模板</a></li>' +
			'				<li><a href="/page/clone.htm?id={{page}}&siteId={{site}}" target="_bank">拷贝页面</a></li>' +
			'				{{/is_design}}' +
			'				{{#is_maintain}}' +
			'				{{#publish}}' +
			'				<li><a href="/page/timePublish.htm?id={{page}}" target="_bank">发布选项</a></li>' +
			'				<li><a href="/page/publishPages.htm?pageId={{page}}" target="_bank">发布状态</a></li>' +
			'				<li><a href="/page/viewReleasedCode.htm?id={{page}}" target="_bank">最近发布代码</a></li>' +
			'				{{/publish}}' +
			'				{{#maintain}}' +
			'				<li><a href="/page/tfs_history_list.htm?id={{page}}" target="_bank">恢复版本</a></li>' +
			'				<li><a href="/page/pageLog.htm?id={{page}}" target="_bank">编辑日志</a></li>' +
			'				<li><a href="/page/moduleTags.htm?id={{page}}" target="_bank">页面标签</a></li>' +
			'				<li><a href="/pageError/addPageError.htm?id={{page}}" target="_bank">报告错误</a></li>' +
			'				<li><a href="/page/restoreData.htm?id={{page}}" target="_bank">导入/导出</a></li>' +
			'				{{/maintain}}' +
			'				{{/is_maintain}}' +
			'				<li><a href="http://to.taobao.com/8XOEDiy" target="_blank">意见反馈</a></li>' +
			'			</ul>' +
			'		</li>' +
			'		{{/create}}' +
			'		<li class="press-admin-item">' +
			'			<span class="press-admin-explore">' +
			'				<a href="preview.htm?id={{page}}" target="_blank">预览</a>' +
			'			</span>' +
			'		</li>' +
			'		{{#is_design}}' +
			'		{{#maintain}}' +
			'		<li class="press-admin-item">' +
			'			<span class="press-admin-explore">' +
			'				<a class="press-admin-save" href="javascript:;">保存</a>' +
			'			</span>' +
			'		</li>' +
			'		{{/maintain}}' +
			'		{{/is_design}}' +
			'		{{#is_maintain}}' +
			'		{{#maintain}}' +
			'		<li class="press-admin-item">' +
			'			<span class="press-admin-explore">' +
			'				<a href="/page/release.htm?ids={{page}}&action=page_action&event_submit_do_ReleasePage=true">预发布</a>' +
			'			</span>' +
			'		</li>' +
			'		{{/maintain}}' +
			'		{{#publish}}' +
			'		<li class="press-admin-item">' +
			'			<span class="press-admin-explore">' +
			'				<a href="/page/release.htm?ids={{page}}&action=page_action&event_submit_do_ReleasePage=true&prepare=true">发布</a>' +
			'			</span>' +
			'		</li>' +
			'		{{/publish}}' +
			'		{{/is_maintain}}' +
			'	</ul>' +
			'	<div class="press-admin-message">' +
			'		<span{{^message}} style="display:none;"{{/message}}>{{{message}}}</span>' +
			'	</div>' +
			'</div>',

		// 布局工具条模板
		TEMPLATE_LAYOUT_ADMIN: '<div class="press-base press-layout-admin">' +
			'	<div class="press-layout-action press-clearfix">' +
			'		<span class="press-layout-add press-overlay-trigger" title="在该布局后添加布局">' +
			'			<b>添加布局</b>' +
			'		</span>' +
			'		<span class="press-layout-up" title="上移布局">' +
			'			<i class="press-icon press-icon-chevron-up"></i>' +
			'		</span>' +
			'		<span class="press-layout-down" title="下移布局">' +
			'			<i class="press-icon press-icon-chevron-down"></i>' +
			'		</span>' +
			'		<span class="press-layout-remove" title="删除布局">' +
			'			<i class="press-icon press-icon-remove"></i>' +
			'		</span>' +
			'		<span class="press-layout-option" title="设置布局结构">' +
			'			<i class="press-icon press-icon-cog"></i>' +
			'		</span>' +
			'	</div>' +
			'</div>',

		// 区块工具条模板
		TEMPLATE_REGION_ADMIN: '<div class="press-base press-region-admin" style="height:{{height}}px;">' +
			'	<div class="press-region-action press-clearfix">' +
			'		<em class="press-region-label">{{width}}</em>' +
			'		<span class="press-region-add">添加模块</span>' +
			'	</div>' +
			'</div>',

		// 模块工具条模板
		TEMPLATE_MODULE_ADMIN: '<div class="press-base press-module-admin">' +
			'	<div class="press-module-mask"></div>' +
			'	<div class="press-module-action press-clearfix">' +
			'		<span class="press-module-add press-overlay-trigger" title="在该模块后添加模块">' +
			'			<b>添加模块</b>' +
			'		</span>' +
			'		<span class="press-module-up" title="上移模块">' +
			'			<i class="press-icon press-icon-chevron-up"></i>' +
			'		</span>' +
			'		<span class="press-module-down" title="下移模块">' +
			'			<i class="press-icon press-icon-chevron-down"></i>' +
			'		</span>' +
			'		<span class="press-module-remove" title="删除模块">' +
			'			<i class="press-icon press-icon-remove"></i>' +
			'		</span>' +
			'		{{#valid}}' +
			'		<span class="press-module-option" title="设置模块皮肤">' +
			'			<i class="press-icon press-icon-cog"></i>' +
			'		</span>' +
			'		{{/valid}}' +
			'	</div>' +
			'</div>',

		// 标准布局模板
		TEMPLATE_LAYOUT: [
			'<div class="J_Layout layout {{grid}}">' +
				'	<div class="col-main">' +
				'		<div class="main-wrap J_Region" data-width="{{main}}"></div>' +
				'	</div>' +
				'</div>',
			'<div class="J_Layout layout {{grid}}">' +
				'	<div class="col-main">' +
				'		<div class="main-wrap J_Region" data-width="{{main}}"></div>' +
				'	</div>' +
				'	<div class="col-sub J_Region" data-width="{{sub}}"></div>' +
				'</div>',
			'<div class="J_Layout layout {{grid}}">' +
				'	<div class="col-main">' +
				'		<div class="main-wrap J_Region" data-width="{{main}}"></div>' +
				'	</div>' +
				'	<div class="col-sub J_Region" data-width="{{sub}}"></div>' +
				'	<div class="col-extra J_Region" data-width="{{extra}}"></div>' +
				'</div>'],

		// 添加布局模板
		TEMPLATE_LAYOUT_ADD: '<div class="press-layout-add-selectable press-overlay-scroll">' +
			'	<strong>可选布局列表</strong>' +
			'	<ul class="press-clearfix">' +
			'		{{#types}}' +
			'		<li class="press-grid press-{{grid}}" data-grid="{{grid}}"><i></i></li>' +
			'		{{/types}}' +
			'	</ul>' +
			'</div>' +
			'<div class="press-layout-add-selected press-overlay-scroll">' +
			'	<strong>当前已选布局</strong>' +
			'	<ul class="press-clearfix"></ul>' +
			'</div>',

		// 布局选项模板
		TEMPLATE_LAYOUT_OPTION: '<div class="press-layout-option-selectable press-overlay-scroll">' +
			'	<strong>可选布局列表</strong>' +
			'	<ul class="press-clearfix">' +
			'		{{#types}}' +
			'		<li class="press-grid press-{{grid}}' +
			'{{#selected}} press-grid-selected{{/selected}}' +
			'" data-grid="{{grid}}"><i></i></li>' +
			'		{{/types}}' +
			'	</ul>' +
			'</div>' +
			'<div class="press-layout-option-using">' +
			'	<strong>当前使用布局</strong>' +
			'	<div class="press-grid press-{{grid}}"></div>' +
			'</div>',

		// 添加模块模板
		TEMPLATE_MODULE_ADD: '<form class="press-module-add-form">' +
			'	<div class="press-form-mini press-clearfix">' +
			'		{{#template}}' +
			'		<div class="press-form-toggle press-clearfix">' +
			'			<a href="javascript:;" class="press-form-toggle-selected" data-value="1">公共模块</a>' +
			'			<a href="javascript:;" data-value="0">私有模块</a>' +
			'			<input type="hidden" name="public">' +
			'		</div>' +
			'		{{/template}}' +
			'		<div class="press-module-add-togglable">' +
			'		<select class="press-form-select press-module-add-authors" name="author">' +
			'			<option value="">创建者</option>' +
			'		</select>' +
			'		<select class="press-form-select press-form-select-disabled" disabled="disabled">' +
			'			<option>{{width}}</option>' +
			'		</select>' +
			'		<input type="hidden" name="width" value="{{width}}">' +
			'		<select class="press-form-select press-module-add-types" name="type"></select>' +
			'		<input class="press-form-text" type="text" size="35" placeholder="模块名称、描述" name="key">' +
			'		<button class="press-button press-button-blue press-button-small" type="submit">搜索</button>' +
			'		</div>' +
			'	</div>' +
			'	<ul class="press-module-add-list press-clearfix press-overlay-scroll" data-load="true" data-page="0"></ul>' +
			'</form>',

		// 模块条目模板
		TEMPLATE_MODULE_ADD_LIST: '{{#data}}' +
			'<li class="press-module-add-item" data-name="{{name}}" data-id="{{id}}" data-base="{{baseUrl}}">' +
			'	<img src="{{imgUrl}}_250x250.jpg" alt="">' +
			'	<em>{{nickName}}</em><i>已选择</i>' +
			'	<div class="press-module-add-explore">' +
			'		<ul>' +
			'			<li>{{nickName}}</li>' +
			'			<li class="press-clearfix"><b>名称：</b><span>{{name}}</span></li>' +
			'			<li class="press-clearfix"><b>描述：</b><span>{{des}}</span></li>' +
			'			<li class="press-clearfix"><b>作者：</b><span>{{author}}</span></li>' +
			'			<li class="press-clearfix"><b>热度：</b><span>{{useNum}} 次</span></li>' +
			'		</ul>' +
			'		<div class="press-module-add-action">' +
			'			{{#public}}' +
			'			<a class="press-button press-button-gray" href="http://tms.taobao.com/daogou/site/market/previewModule.htm?id={{id}}" target="_blank">预览</a>' +
			'			{{/public}}' +
			'			<a class="press-button press-button-blue press-module-add-select" href="javascript:;">选择该模块</a>' +
			'		</div>' +
			'	</div>' +
			'</li>' +
			'{{/data}}',

		// 模块作者模板
		TEMPLATE_MODULE_ADD_AUTHORS: '{{#authors}}' +
			'<option value="{{.}}">{{.}}</option>' +
			'{{/authors}}',

		// 模块类型模板
		TEMPLATE_MODULE_ADD_TYPES: '{{#types}}' +
			'<option value="{{key}}">{{value}}</option>' +
			'{{/types}}',

		// 模块选项模板
		TEMPLATE_MODULE_OPTION: '<form class="press-form press-module-option-form press-overlay-scroll">' +
			'	<div class="press-form-field">' +
			'		<a class="press-module-option-selectable" href="javascript:;">从历史皮肤中选择 &raquo;</a>' +
			'		<div class="press-module-option-history"></div>' +
			'	</div>' +
			'	<div class="press-form-field">' +
			'		<label class="press-form-label">皮肤名称：</label>' +
			'		<div class="press-clearfix">' +
			'			<input type="text" class="press-form-text press-form-text-disabled press-module-option-name" value="{{skin}}" disabled="disabled" placeholder="字母、数字、中划线" required="required" pattern="[0-9a-zA-Z][0-9a-zA-Z-][0-9a-zA-Z]*">' +
			'			<a class="press-form-help press-module-option-edit" href="javascript:;">修改该皮肤</a>' +
			'		</div>' +
			'	</div>' +
			'   <button type="submit" class="press-module-option-submit"></button>' +
			'</form>' +
			'<div class="press-module-option-card">' +
			'	<strong>当前站点色卡</strong>' +
			'	<span class="press-clearfix press-module-option-colors"></span>' +
			'</div>',

		// 模块皮肤字段模板
		TEMPLATE_MODULE_OPTION_FIELD: '<div class="press-form-field">' +
			'	<label class="press-form-label">{{title}}：</label>' +
			'	<div class="press-clearfix">' +
			'		<input type="text" class="press-form-text press-module-option-field" name="{{key}}" value="{{value}}" placeholder="十六进制颜色代码" required="required">' +
			'	</div>' +
			'</div>',

		// 当前站点色卡模板
		TEMPLATE_MODULE_OPTION_COLORS: '{{#colors}}' +
			'<i title="{{key}}" style="background:{{value}}"></i>' +
			'{{/colors}}',

		// 图片热区插件工具条模板
		TEMPLATE_AREA_ADMIN: '<div class="press-base press-area-admin">' +
			'	<span class="press-module-add press-overlay-trigger" title="在该模块后添加模块">' +
			'		<b>添加模块</b>' +
			'	</span>' +
			'	<span class="press-module-up" title="上移模块">' +
			'		<i class="press-icon press-icon-chevron-up"></i>' +
			'	</span>' +
			'	<span class="press-module-down" title="下移模块">' +
			'		<i class="press-icon press-icon-chevron-down"></i>' +
			'	</span>' +
			'	<span class="press-module-remove" title="删除模块">' +
			'		<i class="press-icon press-icon-remove"></i>' +
			'	</span>' +
			'	<span class="press-area-option" title="设置模块图片">' +
			'		<i class="press-icon press-icon-picture"></i>' +
			'	</span>' +
			'	<span class="press-area-add" title="添加热区">' +
			'		<i class="press-icon press-icon-plus"></i>' +
			'	</span>' +
			'	<span class="press-area-save" title="保存热区">' +
			'		<i class="press-icon press-icon-ok"></i>' +
			'	</span>' +
			'</div>',

		// 图片热区插件选项模板
		TEMPLATE_AREA_OPTION: '<form class="press-form press-area-option-form">' +
			'	<div class="press-form-field">' +
			'		<label class="press-form-label">主图：</label>' +
			'		<div class="press-clearfix">' +
			'			<div class="press-area-option-file">' +
			'				<input type="url" class="press-form-text press-area-option-img" value="{{img}}" placeholder="粘贴图片地址或上传图片" required="reduired">' +
			'				<span class="press-area-file"><input type="file"></span>' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'	<div class="press-form-field">' +
			'		<label class="press-form-label">背景色：</label>' +
			'		<div class="press-clearfix">' +
			'			<input type="text" class="press-form-text press-area-option-bgcolor" value="{{bgcolor}}" placeholder="十六进制颜色代码" pattern="(@level[1-5])|(#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?)">' +
			'		</div>' +
			'	</div>' +
			'	<div class="press-form-field">' +
			'		<label class="press-form-label">背景图：</label>' +
			'		<div class="press-clearfix">' +
			'			<div class="press-area-option-file">' +
			'				<input type="url" class="press-form-text press-area-option-bgimg" value="{{bgimg}}" placeholder="粘贴图片地址或上传图片">' +
			'				<span class="press-area-file"><input type="file"></span>' +
			'			</div>' +
			'		</div>' +
			'	</div>' +
			'	<button type="submit" class="press-area-option-submit"></button>' +
			'</form>',

		// 图片热区插件节点模板
		TEMPLATE_AREA_ITEM: '<span class="press-area-border"></span>' +
			'<span class="press-area-resize"></span>' +
			'<span class="press-area-action">' +
			'	<span class="press-area-edit" title="编辑"><i class="press-icon press-icon-pencil"></i></span>' +
			'	<span class="press-area-remove" title="删除"><i class="press-icon press-icon-remove"></i></span>' +
			'</span>' +
			'</span>' +
			'<form class="press-base press-form press-form-mini press-area-form">' +
			'	<span class="press-form-field" title="链接">' +
			'		<input class="press-form-text press-area-field-href" type="text" value="{{href}}" required="required" placeholder="链接">' +
			'	</span>' +
			'	<span class="press-form-field" title="打开方式">' +
			'		<select class="press-form-select press-area-field-target" required="required">' +
			'			<option value="_blank">新窗口打开</option>' +
			'			<option value="_self">当前窗口打开</option>' +
			'		</select>' +
			'	</span>' +
			'	<span class="press-form-field" title="标题（可选）">' +
			'		<input class="press-form-text press-area-field-title" type="text" value="{{title}}" placeholder="标题（可选）">' +
			'	</span>' +
			'	<span class="press-form-field" title="图片（可选）">' +
			'		<input class="press-form-text press-area-field-img" type="url" value="{{img}}" placeholder="图片（可选）">' +
			'		<span class="press-area-file"><input type="file"></span>' +
			'	</span>' +
			'	<span class="press-form-field press-clearfix">' +
			'		<button class="press-button press-button-red press-button-small" type="submit">确定</button>' +
			'		<button class="press-button press-button-gray press-button-small" type="button">取消</button>' +
			'	</span>' +
			'</form>',

		// 编辑工具条模板
		TEMPLATE_MAINTAIN_ADMIN: '<div class="press-base press-maintain-admin">' +
			'	<div class="press-maintain-mask"></div>' +
			'	<div class="press-maintain-action press-clearfix">' +
			'		<span class="press-maintain-status">' +
			'			<b>{{status}}</b>' +
			'		</span>' +
			'		<span class="press-maintain-edit" title="编辑模块内容" data-src="{{src}}">' +
			'			<i class="press-icon press-icon-pencil"></i>' +
			'		</span>' +
			'	</div>' +
			'</div>'

	};

});