# Enzo CECILLON


## Technique pour le mouseover en js 

lien : https://codepen.io/ececillo/pen/WNEbQBJ?editors=1111

```
// Home / Hover
	
	$('#home a article').hover(function(event){
		$(this).toggleClass("js-hover");
		
		$("article").not(this).toggleClass("js-fade");
			
	});		
	
	$("#home a article").on("mouseover", function(event) {
	    $(this).find("video")[0].play();
	
	}).on('mouseout', function(event) {
		//$(this).find("video")[0].load();
		$(this).find("video").get(0).currentTime = 0
		$(this).find("video").get(0).pause();
	});
```