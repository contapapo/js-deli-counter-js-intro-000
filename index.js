  var katzDeli = [];
  var katzDeliline = [];

 function takeANumber(katzDeli, name){

  katzDeli.push(name);

  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeli){

  if (katzDeli.length === 0){
    return `The line is currently empty.`;
  } else {
    for (var i = 0; i < katzDeli.length; i++) {
      katzDeliline.push(" " + i + 1 + "." + " " + katzDeli[i]);
    }
    return "The line is currently:" + katzDeliline;
  }
}
