$(function(){
	//购物车
	$(".car").mouseenter(function() {
		$(".shoppingbox").stop(true)
		$(".shoppingbox").slideDown(200).css("boxShadow","0 2px 1px 1px #ededed")
        

	});
	$(".car").mouseleave(function() {
         $(".shoppingbox").stop(true)
		$(".shoppingbox").slideUp(200)
		

	});
	//tab
	let toptb=$(".nav a")
	toptb.mouseenter(function() {
		$(".headxiala").css("display","none")
		$(this).children(".headxiala").css("display","block")
	});
	toptb.mouseleave(function() {
		$(this).children(".headxiala").css("display","none")
	});

	
	//侧导航
	let lis=$(".anqiubox li")
	lis.mouseenter(function(){
		$(".asidebox").css({"display":"none"})
		$(this).children('.asidebox').css({"display":"block"})
	})
	lis.mouseleave(function(){
		$(this).children('.asidebox').css({"display":"none"})
	})
	//商品
	let parent=$(".jiadian .jyou a")
	let son=$(".jiadian .xyou")
	parent.mouseenter(function() {
		son.css({"display":"none"})
		let index=$(this).index()
		son.eq(index).css({"display":"block"})
		parent.removeClass('active')
		$(this).addClass('active')
	});
	let parent1=$(".jiadian1 .jyou a")
	let son1=$(".jiadian1 .xyou")
	parent1.mouseenter(function() {
		son1.css({"display":"none"})
		let index=$(this).index()
		son1.eq(index).css({"display":"block"})
		parent1.removeClass('active')
		$(this).addClass('active')
	});
	let parent2=$(".jiadian2 .jyou a")
	let son2=$(".jiadian2 .xyou")
	parent2.mouseenter(function() {
		son2.css({"display":"none"})
		let index=$(this).index()
		son2.eq(index).css({"display":"block"})
		parent2.removeClass('active')
		$(this).addClass('active')
	});
	let parent3=$(".jiadian3 .jyou a")
	let son3=$(".jiadian3 .xyou")
	parent3.mouseenter(function() {
		son3.css({"display":"none"})
		let index=$(this).index()
		son3.eq(index).css({"display":"block"})
		parent3.removeClass('active')
		$(this).addClass('active')
	});
	let parent4=$(".jiadian4 .jyou a")
	let son4=$(".jiadian4 .xyou")
	parent4.mouseenter(function() {
		son4.css({"display":"none"})
		let index=$(this).index()
		son4.eq(index).css({"display":"block"})
		parent4.removeClass('active')
		$(this).addClass('active')
	});
	// banner
	let pics=$(".imgbox li")
	let cirs=$(".btnn li")
	let dibu=$(".dibu")
	let az=$(".anniuzuo")
	let ay=$(".anniuyou")
	console.log(pics,cirs,dibu)
	let t=setInterval(move,3000)
    dibu.mouseenter(function() {
    	clearInterval(t)
    });
    dibu.mouseleave(function() {
    	t=setInterval(move,3000)
    });
    az.click(function(){
    	move()
    })
    ay.click(function(){
    	movel()
    })
	pics.first().css("z-index","10")
	cirs.first().addClass('hot')
	let current=0;
	function move(){
		current++;
		if(current==pics.length){
			current=0;
		}
		pics.css("z-index","5").eq(current).css("z-index","10")
		cirs.removeClass('hot').eq(current).addClass('hot')
	}
	function movel(){
		current--;
		if(current<0){
			current=pics.length;
		}
		pics.css("z-index","5").eq(current).css("z-index","10")
		cirs.removeClass('hot').eq(current).addClass('hot')
	}
	cirs.on("click",function(){
		let index=cirs.index(this)
		// let index=$(this).index()
		console.log(index)
		cirs.removeClass('hot').eq(index).addClass('hot')
        pics.css("z-index","5").eq(index).css("z-index","10")
        current=index

	})
// 内容
 function shuangx(tushu){
 let neis=$(tushu).children(".xiabuu")
 let dia=$(tushu).children(".diandian")
 let dians=dia.children("a")
 console.log(dia,dians)
 let zuoan=$(tushu).find(".xiaoyuan")
 let youan=$(tushu).find(".dayuan")
 console.log(neis,dians,zuoan,youan)
 let wtt=neis.eq(0).width()
 console.log(wtt)
 let cur=0, next=0
 let flag=true
 function move1(){
   next++;
   if(next==neis.length){
   	next=0
   }
   neis.eq(next).css("left",wtt+"px")
   neis.eq(next).animate({"left":"0px"},function(){
   	flag=true
   })
   neis.eq(cur).animate({"left":-wtt+"px"})
   dians.eq(next).addClass('hott')
   dians.eq(cur).removeClass('hott')
   cur=next
 }
 function move2(){
   next--;
   if(next<0){
   	next=neis.length-1
   }
   neis.eq(next).css("left",-wtt+"px")
   neis.eq(next).animate({"left":"0px"},function(){
   	flag=true
   })
   neis.eq(cur).animate({"left":wtt+"px"})
   dians.eq(next).addClass('hott')
   dians.eq(cur).removeClass('hott')
   cur=next
 }

youan.click(function(){
	if(!flag){
      return
    }
    
    if(next==neis.length-1){
      next=neis.length-1
      return
    }
    flag=false
    move1();
   })
zuoan.click(function(){
	if(!flag){
      return
    }
    
    if(next==0){
      next=0
      return
    }
    flag=false
    move2();
   })

dians.click(function(){
	let din=$(this).index()
	console.log(din)
	if(din==cur){
		return
	}
	dians.eq(din).addClass('hott')
	dians.eq(cur).removeClass('hott')
	if(din>cur){
		neis.eq(din).css("left",wtt+"px")
		neis.eq(din).animate({"left":"0px"})
		neis.eq(cur).animate({"left":-wtt+"px"})
	}
	if(din<cur){
		neis.eq(din).css("left",-wtt+"px")
		neis.eq(din).animate({"left":"0px"})
		neis.eq(cur).animate({"left":wtt+"px"})
	}
	next=cur=din
})
}
let tushu=document.querySelector(".tushu")
 shuangx(tushu)
 let miui=document.querySelector(".miui")
 shuangx(miui)
 let youxi=document.querySelector(".youxi")
 shuangx(youxi)
 let yingyong=document.querySelector(".yingyong")
 shuangx(yingyong)
 // 明星单品
 let buttonL=$(".hhzuo")
 let buttonR=$(".hhyou")
 let bigbox=$(".dahehe")
 let smallbox=$(".mingxiahe")
 let swidth=bigbox.width()/3
 console.log(buttonL,buttonR,bigbox,swidth,smallbox)
 let times=0;
 buttonR.click(function(){
      times++
      if(times==3){
        times=2
      }
  bigbox.css({transform:`translateX(${-swidth*times}px)`})
 
 })
 buttonL.click(function(){
      times--
      if(times<0){
        times=0
      }
 bigbox.css({transform:`translateX(${-swidth*times}px)`})
 })
})

