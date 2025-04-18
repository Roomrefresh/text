(function() {
  const overlay = document.getElementById("popupOverlay");
  const box = document.getElementById("popupBox");
  const closeBtn = document.getElementById("popupCloseBtn");
  const subscribeBtn = document.getElementById("popupSubscribeBtn");
  const closeIcon = document.getElementById("popupCloseIcon");

  function showPopup() {
    overlay.style.display = "block";
    box.style.display = "block";
  }

  function hidePopup() {
    overlay.style.display = "none";
    box.style.display = "none";
  }

  function openSubscriptionLink() {
    window.open("https://drive.google.com/file/d/1AUx2WTULXWvWtWXYasn4NmA__uRZWS2b/preview", "_blank");
  }

  closeBtn.addEventListener("click", hidePopup);
  closeIcon.addEventListener("click", hidePopup);
  subscribeBtn.addEventListener("click", openSubscriptionLink);

  // Show popup after 3 seconds
  setTimeout(showPopup, 3000);
})();
