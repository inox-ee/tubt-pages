var thumbs_bike = document.querySelectorAll(".thumb-bicycle");
for(var i=0; i<thumbs_bike.length; i++) {
  thumbs_bike[i].onclick = function() {
    document.getElementById("id_bigimg").src = this.dataset.image;
  }
}
