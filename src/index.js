/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
    
    for (let n = 0; n < preferences.length; n++) {

        if (preferences[preferences[preferences[n]-1]-1]-1 == n) {
            count++
        }

    }

    return Math.floor(count/3);
};
