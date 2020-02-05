/**
* @Author: Stanley Backlund
* @Param: Value range as string
* Function converts cells into md5
* hash. Up to 10,000 rows
**/
function arrayHash (valRange){
  var sheet = SpreadsheetApp.getActiveSpreadsheet(); // fetch sheet where function is called.  
  var range = sheet.getRange(valRange);  
  var values = range.getValues();// fetch range of cells user wants to hash. 
  var retArr = []; //Create array to return values.
  
  if(values[0].length >1)//Only accept one column input.
    return 'only one column accepted';      
        for(var i = 0; i < values.length; i++){ // increment through column.        
            var test = MD5(values[i][0]); // add md5 value to return array.\        
            retArr[i]= [test]; // add md5 value to return array.\
        }  
        return retArr;

}
/**
* @Param: Input value as string
* Function converts a single string 
* into a md5 hash sum, Utilizes
* Utilities.DigestAlgorithm
**/
function MD5 (input) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input,Utilities.Charset.UTF_8);
  var txtHash = '';
    for (var i = 0; i < rawHash.length; i++) {
            var hashVal = rawHash[i];
            if (hashVal < 0) {
            hashVal += 256;
            }
            if (hashVal.toString(16).length == 1) {
            txtHash += '0';
            }
            txtHash += hashVal.toString(16);
    }
    return txtHash;
}