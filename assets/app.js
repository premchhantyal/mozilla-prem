(function() {
	"use strict";

	// Add Scripts Here
	var itemDetail = document.getElementsByClassName("item-detail");
    itemDetail[0].addEventListener("click", function() {
        this.classList.toggle("item-detail-active");
        var content = (document.getElementsByClassName("detail-content"))[0];
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.padding = "0";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "10px";
        } 
      });
    	
})();