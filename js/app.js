(function () {
  let socails = document.querySelectorAll(".socail div");

  socails.forEach(function (socail, index) {
    socail.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${
      index / 7 + 0.2
    }s`;
  });
})();
