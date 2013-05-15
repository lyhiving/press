<?php //_tms_module_begin('{"name":"press-area"}'); ?>
<?php
// 标签坑位
//$option = _tms_custom('{"name":"option","title":"设置图片","group":"图片热区","row":"1","defaultRow":"1","fields":"img:热区图片:img,bgcolor:背景颜色:string,bgimg:背景图片:img,width:宽度:string,height:高度:string"}');
//$list = _tms_custom('{"name":"list","title":"所有热区","group":"图片热区","row":"100","defaultRow":"1","fields":"href:链接:href,title:标题:string,img:图片:img,target:新窗口:string,left:左偏移:string,top:上偏移:string,width:宽度:string,height:高度:string"}');
// 标签数据
$option = array(
	1 - 1 => array('img' => 'http://img04.taobaocdn.com/tps/i4/T1yCSjXsxaXXaCZI2r-1-1.jpg', 'bgcolor' => '', 'bgimg' => '', 'width' => '190', 'height' => '150',)
);
$list = array(
	1 - 1 => array('href' => '#', 'title' => '', 'target' => '_blank', 'img' => '', 'left' => '25', 'top' => '25', 'width' => '140', 'height' => '100',)
);
?>
<?php
// 数据处理
$img = $option[0]['img'] ? '<img src="' . $option[0]['img'] . '" alt="" style="vertical-align:middle;">' : '';
$bgcolor = $option[0]['bgcolor'] ? 'background-color:' . $option[0]['bgcolor'] . ';' : '';
$bgimg = $option[0]['bgimg'] ? 'background-image:url(' . $option[0]['bgcolor'] . ');' : '';
$width = $option[0]['width'] ? 'width:' . $option[0]['width'] . 'px;' : '';
$height = $option[0]['height'] ? 'height:' . $option[0]['height'] . 'px;' : '';
?>
<div class="tb-module press-area tb-finish"
     style="background-repeat:no-repeat;background-position:50% 0;<?php echo $bgcolor . $bgimg; ?>">
	<div class="press-area-wrap"
	     style="position:relative;margin:0 auto;<?php echo $width . $height; ?>">
		<?php echo $img;
		// 渲染热区
		if (!empty($list)) : foreach ($list as $k => $v) :
			$left = $v['left'] ? 'left:' . $v['left'] . 'px;' : '';
			$top = $v['top'] ? 'top:' . $v['top'] . 'px;' : '';
			$width = $v['width'] ? 'width:' . $v['width'] . 'px;' : '';
			$height = $v['height'] ? 'height:' . $v['height'] . 'px;' : '';
			$img = $v['img'] ? '<img src="' . $v['img'] . ' alt="">' : '';
			?>
			<a class="press-area-item" href="<?php echo $v['href']; ?>" title="<?php echo $v['title']; ?>"
			   target="<?php echo $v['target']; ?>"
			   style="display:block;position:absolute;<?php echo $left . $top . $width . $height; ?>"><?php echo $img; ?></a>
		<?php endforeach; endif; ?>
	</div>
</div>
<?php //_tms_module_end(); ?>