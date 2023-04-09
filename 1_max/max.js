function max(data) {
   data = data.split(";");

   // converting strings to numbers
   let newData = [];
   for (let i = 0; i < data.length; i++) {
     newData[i] = parseInt(data[i]);
   }

   let max = newData[0];
   for (let j = 0; j < newData.length; j++) {
     if (max < newData[j]) {
       max = newData[j];
     }
   }

   return max;
}

module.exports = max;