/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function  getLoveTrianglesCount(preferences = []) {
    
  
    var count = 0;  
    for (var i = 0; i<preferences.length; i++) { 
        var first = preferences[i] - 1;
        if (first == i) continue;
        var second = preferences[first] - 1;
        if (first == second) continue;
        var third = preferences[second] - 1;
        if (third == second) continue;
        if (third == i) {
            count++;
        }
     }
     return count / 3;
  }
