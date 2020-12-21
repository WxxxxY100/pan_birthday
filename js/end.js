function endFun(){
    setInterval(function() {
	    var circle = document.createElement('div');
	
	    circle.classList.add('circle');
	
	    var x = Math.random() * 100 + 1;
	    var y = Math.random() * 100 + 1;
	
	    var animationTime = Math.round(Math.random() * 10);
	    circle.style.setProperty('--grow-time', `${animationTime}s`);
	
	    // 设置左
	    circle.style.left = x + 'vw';
	    // 设置右
	    circle.style.top = y + 'vh';
	
	    // 设置颜色
	    circle.style.backgroundColor = randomColor();
	
	    circle.innerText = randomText();
	
	    // 生成
	    document.body.appendChild(circle);
	
	    // 清除
	    setTimeout(function() {
	        document.body.removeChild(circle);
	    }, animationTime + "000")
	
    }, 100);
	
	
	
    function randomColor() {
	    const colors = [
	        '#81ecec',
	        '#74b9ff',
	        '#a29bfe',
	        '#ffeaa7',
	        '#fab1a0',
	        '#ff7675',
	        '#fd79a8'
	    ];
	    return colors[Math.round(Math.random() * colors.length)];
    }
	
    function randomText() {
	    const texts = [
	        '杨盼生日快乐',
	        '马上有钱',
	        '先挣他一个亿',
			'杨盼生日快乐',
	        '健康美丽',
	        '最强王者',
	        '无敌战神',
	        '不用判作业',
	        '不用考试',
			'杨盼生日快乐',
	        '天天螺蛳粉',
	        '自然醒',
	        '天然白',
	        '还要继续长高',
			'杨盼生日快乐',
	        '饿了有外卖',
	        '听到喜欢的歌',
	        '手机电量100%',
	        '不用起床',
	        '脱发是什么',
	        '年年都有今日',
	        '熬夜没有黑圆圈',
	        '身材越来越好',
	        '天下美食唯我独尊',
	        '和旭哥海枯石烂',
	        '永远18岁',
			'杨盼生日快乐',
	        '每天都有新衣服'
	    ];
	    return texts[Math.round(Math.random() * (texts.length - 1))];
    }
}
