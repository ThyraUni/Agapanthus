const openBtn = document.getElementById("openInvitationBtn");

  openBtn.addEventListener("click", function (e) {
    e.preventDefault(); 

    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }

    document.getElementById("openingoneandahalf").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });