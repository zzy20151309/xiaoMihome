/**
 * Created by 赵志远 on 2017/10/28.
 */
/*弹出层部分*/
var oMask = document.getElementById('mask');
var oDialog = document.getElementById('dialog');
var oClose = oDialog.getElementsByTagName('span')[0];
oClose.onclick = function () {
    oMask.style.display = 'none';
    oDialog.style.display = 'none';
};
var oBtn = document.getElementById('open');
oBtn.onclick = function () {
    oMask.style.display = 'block';
    oDialog.style.display = 'block';
};

/*轮播图*/
var oTab=document.getElementById("tab");
var aLi=oTab.getElementsByTagName("li");
var oContent=document.getElementById("content");
var aImg=oContent.getElementsByTagName("img");
var oNext=document.getElementById("next");
var oPrev=document.getElementById("prev");
var iIndex=0;

for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onmouseover=function () {
        iIndex=this.index;
        changeImg(this.index)
    };
}


function changeImg (idx) {
    for(var i=0;i<aLi.length;i++){
        aLi[i].className="";
        aImg[i].className="";
    }
    aLi[idx].className="selected";
    aImg[idx].className="selected";
}//封装函数

oNext.onclick=function () {
    iIndex++;
    if(iIndex==aLi.length){
        iIndex=0;
    }
    changeImg(iIndex)
};
oPrev.onclick=function () {
    iIndex--;
    if(iIndex==-1){
        iIndex=aLi.length-1;
    }
    changeImg(iIndex)
};
setInterval(function () {oNext.onclick()},2000);
/******************************************************/
var oMiDan=document.getElementById("mi-dan");
var aDiv=oMiDan.getElementsByTagName("div");
var aSpan=oMiDan.getElementsByTagName("span");
var iIndex1 = 0;
for(var i=0;i<aSpan.length;i++){
    aSpan[i].index=i;
    aSpan[i].onclick = function () {
        iIndex1++;
        if(iIndex1 == aSpan.length){
            iIndex1=0;
        }
        for(var i=0;i<aSpan.length;i++){
            aDiv[i].className = "";
        }
        aDiv[iIndex1].className = "selected1";
    };
    aSpan[i].onselectstart = function () {
        return false;
    }
}
//        setInterval(function () {
//            aSpan[i].onclick();
//        },1000);





var oTab2 = document.getElementById("tab2");
var aLi2 = oTab2.getElementsByTagName("li");
var oJiadianRow = document.getElementById("jiadian-row");
var aUl2 = oJiadianRow.getElementsByTagName("ul");
for(var i=0;i<aLi2.length;i++){
    aLi2[i].index = i;
    aLi2[i].onmouseover = function () {
        for(var i=0;i<aLi2.length;i++){
            aLi2[i].className = "";
            aUl2[i].className = "";
        }
        this.className = "selected2";
        aUl2[this.index].className = "selected2";
    }
}




var oMask = document.getElementById('mask');
var oDialog = document.getElementById('dialog');
var oClose = oDialog.getElementsByTagName('span')[0];
oClose.onclick = function () {
    oMask.style.display = 'none';
    oDialog.style.display = 'none';
};

var oI11 = document.getElementById('i11');
oI11.onclick = function () {
    oMask.style.display = 'block';
    oDialog.style.display = 'block';
};