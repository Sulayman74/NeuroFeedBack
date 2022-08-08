var overlayOnComplete, activeOverlay, overlayZIndex

document.addEventListener("DOMContentLoaded", function() {
  $("#overlay-dimmer").on("click", hideOverlay);

  gsap.set("#overlay-dimmer", {force3D:true});
  window.showOverlay = showOverlay;
  window.hideOverlay = hideOverlay;
  window.prepVimeo = prepVimeo;
});

var first = true;
function prepVimeo(overlay) {
  if(first) {
    if(typeof overlay === "string")
      overlay = document.querySelector(overlay);

    if (overlay
    && overlay.querySelector("iframe")) {
      overlay.querySelector("iframe").contentWindow.postMessage('{"method":"play"}', '*');
      overlay.querySelector("iframe").contentWindow.postMessage('{"method":"pause"}', '*');
    }
    
    first = false;
  }
}

function showOverlay(overlay, onComplete) {
  if (!overlay) {
    console.log("Error: no overlay argument provided to showOverlay().");
    return;
  }
  
  //exportedRoot = gsap.exportRoot().pause();
  
  if (activeOverlay) { //if there's already an active overlay, hide it first.
    gsap.to(activeOverlay, {duration:0.1, rotationX:70, y:-300, z:-500, autoAlpha:0, display:"none", ease:"power1.in", onComplete:function() {
      if (overlayZIndex) {
        activeOverlay.style.zIndex = overlayZIndex;
      } else {
        gsap.set(activeOverlay, {clearProps:"zIndex"});
      }
      activeOverlay = null;
      //exportedRoot.resume();
      showOverlay(overlay, onComplete);
    }});
    return;
  }
  activeOverlay = overlay[0] || overlay; //in case it's a jQuery object.
  if(typeof overlay === "string")
    activeOverlay = document.querySelector(overlay);
  //ga('send', 'pageview', {'page': '/overlay/'+activeOverlay.getAttribute('id'),'title': 'Overlay Opened'});


  // Brads Scroll Overlay Fixins
  jQuery('body, html').addClass('noscroll');


  overlayZIndex = activeOverlay.style.zIndex;
  gsap.set(activeOverlay, {zIndex:4000});
  gsap.to("#overlay-dimmer", {duration:0.25, autoAlpha:0.6, ease:"none", overwrite: 'auto'});
  gsap.set(activeOverlay, {width: "90vw", height: "90vh", overflow:"auto", scale:0.5, rotationX:70, autoAlpha:0, y:-300, z:-500, xPercent:-50, yPercent:-50, x:0, transformPerspective:600, display:"block"});
  gsap.to(activeOverlay, {duration:0.25, rotationX:0, y:0, z:0,autoAlpha:1, scale:1, delay:0.3});
  overlayOnComplete = onComplete;

  // If the popup has a video, start it
  if(activeOverlay.querySelector("video"))
    activeOverlay.querySelector("video").play();
  if(activeOverlay.querySelector("iframe"))
  	gsap.delayedCall(1, function() { activeOverlay.querySelector("iframe").contentWindow.postMessage('{"method":"play"}', '*'); });

  return false;
}

function hideOverlay() {

  // Brads Scroll Overlay Fixins
  jQuery('body, html').removeClass('noscroll');

  gsap.to("#overlay-dimmer", {duration:0.3, autoAlpha:0, delay:0.25, ease:"none", onComplete:overlayOnComplete});
  if (activeOverlay) {
    gsap.set(activeOverlay, {transformPerspective:600});
    
    if(activeOverlay.querySelector("video"))
      activeOverlay.querySelector("video").pause();
    if(activeOverlay.querySelector("iframe"))
  	  activeOverlay.querySelector("iframe").contentWindow.postMessage('{"method":"pause"}', '*');
    
    gsap.to(activeOverlay, {duration:0.25, rotationX:70, y:-300, z:-500, autoAlpha:0, display:"none", onComplete:function() {
      if (overlayZIndex) {
        activeOverlay.style.zIndex = overlayZIndex;
      } else {
        gsap.set(activeOverlay, {clearProps:"zIndex"});
      }
      activeOverlay = null;
      //exportedRoot.resume();
    }});
  }
}
