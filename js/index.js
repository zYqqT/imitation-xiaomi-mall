// 页面执行
window.onload = function () {
    playinput();
}
// 展示手机导航栏具体信息
function showphone(n) {
    var banmain = document.getElementsByClassName("banmain");
    var banbox = document.getElementsByClassName("banbox")[0];
    for (var i = 0; i < banmain.length; i++) {
        banmain[i].style.display = "none";
    }
    banmain[n].style.display = "flex";
    banbox.style.height = "229px";
}

// 隐藏手机导航栏具体信息
function hidephone() {
    var banmain = document.getElementsByClassName("banmain");
    var banbox = document.getElementsByClassName("banbox")[0];
    for (var i = 0; i < banmain.length; i++) {
        banmain[i].style.display = "none";
    }
    banbox.style.height = 0;
}

// 搜索框placeholder自动播放
function playinput() {
    var inputk = document.getElementsByClassName('inputk')[0];
    var n = 1;
    var arr = ['红米', '手机', '黑鲨5', '冰箱', '电视', '洗衣机', 'Redmi G 2021'];
    setInterval(() => {
        inputk.placeholder = arr[n];
        n++;
        if (n == arr.length) {
            n = 0;
        }
    }, 6000)
}
// 点击搜索框
function clickinput() {
    var inputk = document.getElementsByClassName("inputk")[0];
    var iconsousuo = document.getElementsByClassName("icon-sousuo")[0];
    var inputcon = document.getElementsByClassName('inputcon')[0];

    inputk.style.borderColor = '#ff6700';
    iconsousuo.style.borderColor = '#ff6700';
    inputcon.style.display = 'block';
    inputcon.style.borderColor = '#ff6700';
}
// 移出搜索框
function hideinput() {
    var inputk = document.getElementsByClassName("inputk")[0];
    var iconsousuo = document.getElementsByClassName("icon-sousuo")[0];
    var inputcon = document.getElementsByClassName('inputcon')[0];
    inputk.style.borderColor = '#e0e0e0';
    iconsousuo.style.borderColor = '#e0e0e0';
    inputcon.style.display = 'none';
}

// 记录是第几张
var num = 0;
// 定时器
var t = null;
// 获取
var swiperitem = document.getElementsByClassName("swiperitem");

// 自动播放轮播图
playswiper();
function playswiper() {
    t = setInterval(() => {
        num++
        for (var i = 0; i < swiperitem.length; i++) {
            swiperitem[i].style.opacity = 0;
        }
        if (num == swiperitem.length) {
            num = 0;
        }
        swiperitem[num].style.opacity = 1;
        playcircles();
    }, 5000)
}

// 轮播图上一页
function backswiper() {
    clearInterval(t);
    for (var i = 0; i < swiperitem.length; i++) {
        swiperitem[i].style.opacity = 0;
    }
    num--;

    if (num < 0) {
        num = swiperitem.length - 1;
    }
    swiperitem[num].style.opacity = 1;
    playcircles();
    playswiper();
}
// 轮播图下一页
function nextswiper() {
    clearInterval(t);
    for (var i = 0; i < swiperitem.length; i++) {
        swiperitem[i].style.opacity = 0;
    }
    num++;
    if (num == swiperitem.length) {
        num = 0;
    }
    swiperitem[num].style.opacity = 1;
    playcircles();
    playswiper();
}


// 自动播放指示点
function playcircles() {
    var clickcircle = document.getElementsByClassName('clickcircle');
    for (var i = 0; i < clickcircle.length; i++) {
        clickcircle[i].style.backgroundColor = 'rgba(10, 10, 10,0.5)';
    }
    clickcircle[num].style.backgroundColor = '#fff';
}

// 点击指示点
function handlecircle(n) {
    num = n - 1;
    nextswiper();
}


// 轮播图悬停
var swiperimg = document.getElementsByClassName('swiperimg')[0];
swiperimg.addEventListener('mouseover',()=>{
    clearInterval(t);
})
swiperimg.addEventListener('mouseout',()=>{
    playcircles();
    playswiper();
})

// 黑色那一模块里的内容展示
function showdata(n) {
    var sjdiv = document.getElementsByClassName('sjdiv');
    for (var i = 0; i < sjdiv.length; i++) {
        sjdiv[i].style.display = 'none';
    }
    sjdiv[n].style.display = 'flex';
}
// 黑色那一模块里的内容隐藏
function hidedata() {
    var sjdiv = document.getElementsByClassName('sjdiv');
    for (var i = 0; i < sjdiv.length; i++) {
        sjdiv[i].style.display = 'none';
    }
}
// 智能穿戴
function handlehot(n) {
    var zncd = document.getElementsByClassName('zncd');
    var zncda = document.getElementsByClassName('zncda');
    for (let i = 0; i < zncd.length; i++) {
        zncd[i].style.display = "none";
        zncda[i].style.color = "#333";
        zncda[i].style.borderBottom = "2px solid rgba(0, 0, 0, 0)";
    }
    zncd[n].style.display = "flex";
    zncda[n].style.color = "#ff6700";
    zncda[n].style.borderBottom = "2px solid #ff6700";
}
// 家电
function handlehome(n) {
    var jda = document.getElementsByClassName('jda');
    var jd = document.getElementsByClassName('jd');
    for (var i = 0; i < jd.length; i++) {
        jda[i].style.color = "#333";
        jda[i].style.borderBottom = "2px solid rgba(0, 0, 0, 0)";
        jd[i].style.display = "none";
    }
    jda[n].style.color = "#ff6700";
    jda[n].style.borderBottom = "2px solid #ff6700";
    jd[n].style.display = "flex";
}
// 生活电器
function handlelive(n) {
    var shdqa = document.getElementsByClassName('shdqa');
    var shdq = document.getElementsByClassName('shdq');
    for (var i = 0; i < shdq.length; i++) {
        shdqa[i].style.color = "#333";
        shdqa[i].style.borderBottom = "2px solid rgba(  0, 0, 0, 0)";
        shdq[i].style.display = 'none';
    }
    shdqa[n].style.color = "#ff6700";
    shdqa[n].style.borderBottom = "2px solid #ff6700";
    shdq[n].style.display = 'flex';
}
// 厨房电器
function handlechu(n) {
    var cfdqa = document.getElementsByClassName('cfdqa');
    var cfdq = document.getElementsByClassName('cfdq');
    for (var i = 0; i < cfdq.length; i++) {
        cfdqa[i].style.color = "#333";
        cfdqa[i].style.borderBottom = "2px solid rgba(  0, 0, 0, 0)";
        cfdq[i].style.display = 'none';
    }
    cfdqa[n].style.color = "#ff6700";
    cfdqa[n].style.borderBottom = "2px solid #ff6700";
    cfdq[n].style.display = 'flex';
}
// 智能家居
function handlejia(n) {
    var znjja = document.getElementsByClassName('znjja');
    var znjj = document.getElementsByClassName('znjj');
    for (var i = 0; i < znjj.length; i++) {
        znjja[i].style.color = "#333";
        znjja[i].style.borderBottom = "2px solid rgba(  0, 0, 0, 0)";
        znjj[i].style.display = 'none';
    }
    znjja[n].style.color = "#ff6700";
    znjja[n].style.borderBottom = "2px solid #ff6700";
    znjj[n].style.display = 'flex';
}
// 运动出行
function handleyun(n) {
    var ydcxa = document.getElementsByClassName('ydcxa');
    var ydcx = document.getElementsByClassName('ydcx');
    for (var i = 0; i < ydcx.length; i++) {
        ydcxa[i].style.color = "#333";
        ydcxa[i].style.borderBottom = "2px solid rgba(  0, 0, 0, 0)";
        ydcx[i].style.display = 'none';
    }
    ydcxa[n].style.color = "#ff6700";
    ydcxa[n].style.borderBottom = "2px solid #ff6700";
    ydcx[n].style.display = 'flex';
}
// 日用百货
function handlelife(n) {
    var rybha = document.getElementsByClassName('rybha');
    var rybh = document.getElementsByClassName('rybh');
    for (var i = 0; i < rybh.length; i++) {
        rybha[i].style.color = "#333";
        rybha[i].style.borderBottom = "2px solid rgba(  0, 0, 0, 0)";
        rybh[i].style.display = 'none';
    }
    rybha[n].style.color = "#ff6700";
    rybha[n].style.borderBottom = "2px solid #ff6700";
    rybh[n].style.display = 'flex';
}

// 移到一定位置 出现回到顶部
window.onscroll = function () {
    var r2 = document.getElementsByClassName('r2')[0];
    if (window.scrollY > window.innerHeight) {
        r2.style.display = 'flex';
    } else {
        r2.style.display = 'none';
    }
};
// 点击回到顶部
function backtop() {
    window.scrollTo(0, 0);
}
// 视频播放显示
var videoplaybox = document.querySelectorAll('.videoplaybox');
function playVideo(n) {
    console.log(videoplaybox.style);
    videoplaybox[n].style.display = 'block';

}
// 视频播放隐藏
function hidevideo() {
    for (var i = 0; i < videoplaybox.length; i++) {
        videoplaybox[i].style.display = 'none';
    }
}




























// 底部安全卫士
var imgactivebox = document.getElementsByClassName('imgactive')[0];
var activenum = 0;
function playimg() {
    setInterval(() => {
        activenum++;
        if (activenum % 2 == 0) {
            imgactivebox.style.display = "none";
        } else {
            imgactivebox.style.display = "block";
        }
    }, 2000)

}
playimg();
