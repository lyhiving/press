<?php //_tms_module_begin('{"name":"press-area"}'); ?>
<?php
// ��ǩ��λ
//$option = _tms_custom('{"name":"option","title":"����ͼƬ","group":"ͼƬ����","row":"1","defaultRow":"1","fields":"img:����ͼƬ:img,bgcolor:������ɫ:string,bgimg:����ͼƬ:img,width:���:string,height:�߶�:string"}');
//$list = _tms_custom('{"name":"list","title":"��������","group":"ͼƬ����","row":"100","defaultRow":"1","fields":"href:����:href,title:����:string,img:ͼƬ:img,target:�´���:string,left:��ƫ��:string,top:��ƫ��:string,width:���:string,height:�߶�:string"}');
// ��ǩ����
$option = array(
	1 - 1 => array('img' => 'http://img04.taobaocdn.com/tps/i4/T1yCSjXsxaXXaCZI2r-1-1.jpg', 'bgcolor' => '', 'bgimg' => '', 'width' => '100%', 'height' => '150px',)
);
$list = array(
	1 - 1 => array('href' => '#', 'title' => '', 'target' => '_blank', 'img' => '', 'left' => '25px', 'top' => '25px', 'width' => '140px', 'height' => '100px',)
);
?>
<?php
// ���ݴ���
$img = $option[0]['img'] ? '<img src="' . $option[0]['img'] . '" alt="" style="vertical-align:middle;">' : '';
$bgcolor = $option[0]['bgcolor'] ? 'background-color:' . $option[0]['bgcolor'] . ';' : '';
$bgimg = $option[0]['bgimg'] ? 'background-image:url(' . $option[0]['bgimg'] . ');' : '';
$width = $option[0]['width'] ? 'width:' . $option[0]['width'] . ';' : '';
$height = $option[0]['height'] ? 'height:' . $option[0]['height'] . ';' : '';
?>
<div class="tb-module press-area tb-finish"
     style="background-repeat:no-repeat;background-position:50% 0;<?php echo $bgcolor . $bgimg; ?>">
	<div class="press-area-wrap"
	     style="position:relative;margin:0 auto;<?php echo $width . $height; ?>">
		<?php echo $img;
		// ��Ⱦ����
		if (!empty($list)) : foreach ($list as $k => $v) :
			$left = $v['left'] ? 'left:' . $v['left'] . ';' : '';
			$top = $v['top'] ? 'top:' . $v['top'] . ';' : '';
			$width = $v['width'] ? 'width:' . $v['width'] . ';' : '';
			$height = $v['height'] ? 'height:' . $v['height'] . ';' : '';
			$img = $v['img'] ? '<img src="' . $v['img'] . ' alt="">' : '';
			?>
			<a class="press-area-item" href="<?php echo $v['href']; ?>" title="<?php echo $v['title']; ?>"
			   target="<?php echo $v['target']; ?>"
			   style="display:block;position:absolute;<?php echo $left . $top . $width . $height; ?>"><?php echo $img; ?></a>
		<?php endforeach; endif; ?>
	</div>
</div>
<?php //_tms_module_end(); ?>