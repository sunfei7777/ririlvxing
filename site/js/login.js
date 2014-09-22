/*
 *	sun-tab
 *	made by sunpengfei 2014-9-21
 *	作者：孙鹏飞  2014-9-21
 * http://ririlvxing.com
 */
 $(document).ready(function(){
  $("#user_name").click(function(){
    document.getElementById("usernamespan").style.display="none";
  });
  $("#usernamespan").click(function(){
  	document.getElementById("usernamespan").style.display="none";
	document.getElementById("user_name").focus();
  });
});