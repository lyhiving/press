<?php
// module-add.js
sleep(1);
echo $_REQUEST['callback'] . '('; ?>{"data":"<div class=\"tb-module\" style=\"background:<?php echo 'rgb'; ?>(<?php echo rand(0, 255); ?>,<?php echo rand(0, 255); ?>,<?php echo rand(0, 255); ?>);height:150px;line-height:150px;text-align:center;color:#fff;\">测试模块</div>"}<?php echo ')'; ?>