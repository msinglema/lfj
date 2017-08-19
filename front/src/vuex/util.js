export default {
  	extend(){
        let arr = Array.prototype.slice.apply(arguments)

        if(arr.length == 1){
            return arr[0]
        }else{
            for(let i=1; i<arr.length; ++i){
                 for(let key in arr[i]){
                     arr[0][key] = arr[i][key]
                 }
            }
        }
        return arr[0]
  	}
}