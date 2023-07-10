const carousel = document.querySelector(".carousel");
      let isDragging = false; startx , startscrollleft;

      const dragstart = () => {
        isDragging = true;
        carousel.classList.add("dragging")
        startx = e.pagex;
        startscrollleft = carousel.scrollleft
      }
    
      const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startscrollleft - (e.pagex - startx) ;

      }
      const dragstop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
      }
      carousel.addEventListener("mousedown" , dragstart);
      carousel.addEventListener("mousemove" , dragging);
      carousel.addEventListener("mouseup" , dragstop);