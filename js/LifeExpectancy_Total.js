let fs = require('fs');
let re = require('readline');
let lineReader = re.createInterface({
    input: fs.createReadStream('../inputdata/Indicators.csv')
});
// var data = '';

/* insializing variables*/
// let indexCountry = '';
// let indexindicatorcode = '';
// let indexyear = 0;
// let indexvalue = 0;
// let count = 0;
//
let output3 = [];
// let output2 = [];
let total = 0;
// let sum1 = 0;
// let brate = 0;
// let drate = 0;
let year = 1960;
let object3 = {};
// let object2 = {};
let asiancountry = [ 'China', 'India', 'Pakistan', 'Singapore', 'Thailand'];
let le = ['SP.DYN.LE00.FE.IN', 'SP.DYN.LE00.MA.IN', 'SP.DYN.LE00.IN'];
// let bd_rate = new Array('SP.DYN.CBRT.IN', 'SP.DYN.CDRT.IN');

// Handle stream events --> data, end, and error
lineReader.on('line', function(chunk)
{
    let split2 = chunk.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    // console.log(split2[5]);

    // To get the total life expectancy
    for (let i = 0; i < asiancountry.length; i = i + 1) {
        //  console.log('program started');
        for(let j = year; j < 2016; j++ )
        {
            if (asiancountry[i] === split2[0] && le[2] === split2[3] && j === split2[4]) {
              total = total + Math.round(split2[5]);
            //  console.log(sum1);
             }
      }
          if(i< asiancountry.length)
          {
                object3 = {
                'year': asiancountry[i],
                'Highest Life expectancy at birth': total
            }; i = i + 1;
            output3.push(object3);
             total = 0;}
    }

}); lineReader.on('close', function() {
  fs.writeFile('../outputdata/OutputJSONNavin3.json', JSON.stringify(output3));
 console.log(output3);
    // console.log('Male_Female_LifeExpentency.json was created');
});

// readerStream.on('end',function(){
//    console.log(data);
// });
//
// readerStream.on('error', function(err){
//    console.log(err.stack);
// });