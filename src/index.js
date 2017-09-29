module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let arr = str.split('');
    let buffer = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++){
            if (arr[i] === bracketsConfig[j][1] && buffer[buffer.length - 1] === bracketsConfig[j][0])
                    buffer.pop();
            else if (arr[i] === bracketsConfig[j][0])
                buffer.push(arr[i]);
        }
    }
    if (buffer.length === 0) {
        return true;
  	} 
  	else { 
        return false; 
  	}

}