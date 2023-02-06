let tag = document.getElementsByTagName("a")
tag[0].addEventListener("mouseover", function(){
    console.log("flipkart enter")
})
tag[0].addEventListener("mouseout", function(){
    console.log("flipkart leave home page")
})
tag[0].addEventListener("mouseup", function(){
    console.log("mouseup")
})
tag[0].addEventListener("mousedown", function(){
    console.log("mousedown")
})
tag[0].addEventListener("click", function(){
    console.log("click")
})