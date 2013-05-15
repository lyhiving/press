<?php
// module-option.js
echo $_REQUEST['callback'] . '('; ?>{"data":[{"title":"背景色","name":"background-color","value":"@level1"},{"title":"文字色","name":"color","value":"#FF4400"},{"title":"边框色","name":"border-color","value":"@level3"}]}<?php echo ')'; ?>