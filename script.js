var currentDate = new Date();

function Door(day) {

  this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';


  this.content = function() {

    var node = document.createElement("li");
    document.getElementById("adventDoors").appendChild(node);
    node.id = "door" + day;

    var innerNode = document.createElement("a");
    document.getElementById("door" + day).appendChild(innerNode);
    node.style.cssText = "background-image: " + images[day - 1] + ";";
    innerNode.innerHTML = day;
    innerNode.href = "#";
    // document.getElementById("door" + day).children().text(day);

    if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
      innerNode.className = "disabled";
      innerNode.onclick = function() {
        alert(`РАНО СУКА!`);
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
