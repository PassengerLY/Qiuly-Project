//图片预加载
(function($){
	function PreLoad(imgs,options){
		this.imgs = (typeof imgs === 'string')?[imgs] : imgs;
		this.opts = $.extend({},PreLoad.defaults,options);
		
		this._unoredered()
	}
	//初始化
	PreLoad.defaults={
		each:null,//每张照片加载完毕后执行
		all:null //所有图片加载完毕后执行
	}
	//无序加载
	PreLoad.prototype._unoredered = function(){
		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			len = imgs.length;
		//加载图片	
		$.each(imgs, function(i, src) {
			//src 是否为字符串
			if(typeof src != 'string'){
				return;
			}
			var imgObj = new Image();
			
			$(imgObj).on('load error', function() {
				//每张图片完毕后执行
				opts.each && opts.each(count,len); 
				//全部加载完毕后执行
				if(count >= len - 1) {
					opts.all && opts.all(len);
				}
				count++;
			})
			imgObj.src = src;
		});
	};
//	jQuery 插件
//	$.fn.extend() -> $('#img').PreLoad();
//  $.extend() -> $.PreLoad();
	$.extend({
		preload:function(imgs,opts){
			new PreLoad(imgs,opts);
		}
	});
	
})(jQuery);
