const TEXTs = [
    {
        text: '现在是北京时间：',
        styleName: 'animate__bounce'
    },
    {
        text: `${getCurTime()}`,
        styleName: 'animate__jello'
    },
    {
        text: '张欢小姐姐，七夕快乐呀~🎉🎉🎉',
        styleName: 'animate__pulse'
    },
    {
        text: '送你个创意礼物吧',
        styleName: 'animate__rubberBand'
    },
    {
        text: '那就写个代码吧',
        styleName: 'animate__shakeX'
    },
    {
        text: '时间过得真快呀~',
        styleName: 'animate__shakeY'
    },
    {
        text: '2017年11月25日',
        styleName: 'animate__headShake'
    },
    {
        text: '一直到现在',
        styleName: 'animate__swing'
    },
    {
        text: '我们有过欢笑，有过争吵',
        styleName: 'animate__tada'
    },
    {
        text: '2024年4月xx日',
        styleName: 'animate__wobble'
    },
    {
        text: '实现了 1 + 1 = 3',
        styleName: 'animate__jello'
    },
    {
        text: '辛苦了，亲爱的',
        styleName: 'animate__heartBeat'
    },
    {
        text: '其实有特别多想说的',
        styleName: 'animate__backInDown'
    },
    {
        text: '但是不知道咋说，哈哈',
        styleName: 'animate__backInLeft'
    },
    {
        text: '搞了个照片集',
        styleName: 'animate__shakeY'
    },
    {
        text: '记录一下这些美好的时光',
        styleName: 'animate__fadeIn'
    },
    {
        text: '有你的，我的，我们的，还有宝宝的...',
        styleName: 'animate__fadeInTopRight'
    },
    {
        text: '最后，祝我们七夕快乐吧...',
        styleName: 'animate__fadeInBottomLeft'
    },
    {
        text: '图片有点大。。。',
        styleName: 'animate__backInDown'
    },
    {
        text: '会有一丢丢卡顿哦。',
        styleName: 'animate__pulse'
    }
]

function getRandomColor() {
    // 定义要排除的颜色
    const excludedColors = ['#000000', '#008000']; // 黑色和绿色的十六进制代码

    let color;
    do {
        // 生成随机颜色
        color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
    } while (excludedColors.includes(color));

    return color;
}

let count = 0
function getCurTime() {
    // 获取当前时间
    const now = new Date();

    // 提取年月日时分秒
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // 格式化为 YYYY-MM-DD HH:MM:SS
    return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
}

function textPlay() {
    if(count >= TEXTs.length) return;
    const divDom = document.createElement('div');
    divDom.className = 'title';
    divDom.innerText = TEXTs[count].text;
    divDom.style.position = 'absolute';
    divDom.style.top = '30px';
    divDom.style.color = getRandomColor();
    divDom.classList.add('animate__animated', TEXTs[count].styleName);
    document.body.appendChild(divDom);
    setTimeout(() => {
        document.body.removeChild(document.querySelector('.title'));
        count += 1;
        textPlay();
    }, 2000);
}
export default textPlay;