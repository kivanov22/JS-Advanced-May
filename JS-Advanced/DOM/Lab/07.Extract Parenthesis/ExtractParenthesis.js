
function extract(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];
  
    let match = pattern.exec(para);
    while(match) {
      result.push(match[1]);
      match = pattern.exec(para);
    }
  
    return result.join('; ');
  }
  let result = extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil - bearing rose found in the valley is the pink - petaled Damask rose(Rosa damascena Mill).');

console.log(result);