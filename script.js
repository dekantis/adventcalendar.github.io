var currentDate = new Date();
var n = 0;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function Door(day) {

  this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';


  this.content = function() {

    var node = document.createElement("li");
    document.getElementById("adventDoors").appendChild(node);
    node.id = "door" + day;

    var innerNode = document.createElement("a");
    document.getElementById("door" + day).appendChild(innerNode);

    if (images.length >= day) {
      node.style.cssText = "background-image: " + images[day - 1] + "; z-index: 9999;";
    } else {
      node.style.cssText = "background-image: " + images[n] + "; z-index: 9999;";
      ++n;
    };
    innerNode.innerHTML = day;
    innerNode.href = "#";
    // document.getElementById("door" + day).children().text(day);

    if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
      innerNode.className = "disabled";
      innerNode.onclick = function() {

        alert(
          "Sorry. You can open the cell through: " +
          getTimeRemaining("Dec " + day + " , 2017").days + " days " +
          getTimeRemaining("Dec " + day + " , 2017").hours + " hours " +
          getTimeRemaining("Dec " + day + " , 2017").minutes +
          " minutes! Feel the holiday! Be happy!"
        );

        return false;
      }
    } else {
      var adventMessage = this.adventMessage;
      innerNode.onclick = function() {
        alert(adventMessage);
        return false;
      }
    }
  };
}



(function() {
  var doors = [];

  for (var i = 0; i < 24; i++) {

    doors[i] = new Door(i + 1);
    doors[i].content();

  }

  return doors;
})();
