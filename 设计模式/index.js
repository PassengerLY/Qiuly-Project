
	//冲泡饮料
	var Beverage = function(){
//		this.opt = $.extend({}, Beverage.default, options);
	};
//	Beverage.prototype.default = {
//		IsNeedCondiments:true
//	}
	//公共方法
	Beverage.prototype.boilWater = function(){
		console.log('把水煮沸');
	}
	Beverage.prototype.brew = function(){
		console.log('冲泡');
	}
	Beverage.prototype.pourInCup = function(){
		console.log('倒进杯子');
	}
	Beverage.prototype.addCondiments = function(){
		console.log('加调料');
	}
	Beverage.prototype.IsNeedCondiments = function(){
		return true;
	}
	Beverage.prototype.init = function(){
		//把水煮沸
		this.boilWater();
		//冲泡
		this.brew();
		//倒进杯子
		this.pourInCup();
		//加调料
		if(this.IsNeedCondiments){
			this.addCondiments();
		}
	};
	
	
	//冲泡咖啡
	var Coffer = function(){};
	
	Coffer.prototype = new Beverage();
	
	Coffer.prototype.brew = function(){
		console.log('用沸水冲泡咖啡');
	}
	Coffer.prototype.pourInCup = function(){
		console.log('将咖啡倒进杯子');
	}
	Coffer.prototype.addCondiments = function(){
		console.log('加糖和牛奶');
	}
	Coffer.prototype.IsNeedCondiments = function(){
		return false;
	}
	
	
	
	//冲泡茶水
	var Tea = function(){};
	
	Tea.prototype = new Beverage();
	
	Tea.prototype.brew = function(){
		console.log('用沸水浸泡茶叶');
	}
	Tea.prototype.pourInCup = function(){
		console.log('将茶水倒进杯子');
	}
	Tea.prototype.addCondiments = function(){
		console.log('加柠檬');
	}
	Tea.prototype.IsNeedCondiments = function(){
		return false;
	}
	
	
	


