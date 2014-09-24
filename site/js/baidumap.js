/*
 * 自己写一个标注类MMarker，继承自BMap.Marker，采用的是原型链继承方式
 * no-标注编号,这个编号是跟从后台传过来的数据解析成的数组d的下标示一致的
 */



function f(data) {
 	// var map = new BMap.Map("allmap",{mapType: BMAP_HYBRID_MAP});
    map = new BMap.Map("allmap");
	// 百度地图API功能
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
	map.addControl(new BMap.MapTypeControl()); //卫星转换
	map.addControl(new BMap.NavigationControl());//地图平移缩放控件
	map.addControl(new BMap.OverviewMapControl());//缩略图
	map.addControl(new BMap.ScaleControl()); //比例尺
	map.enableScrollWheelZoom();//鼠标滑轮缩放
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	local.search("景点");
}

