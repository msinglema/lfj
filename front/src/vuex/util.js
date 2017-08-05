export default {
  	extend(){
        let len = arguments.length;
        if(len === 1){
         	return arguments[0]
        }else if(len === 2){
            let target = arguments[0]
            let source = arguments[1]
            if(typeof target === 'object' && typeof source === 'object'){
                for(let key in source){
                 	target[key] = source[key]
                }
            }
            return target
        }
  	},
    trim(str=''){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    getQuery(name,url){
       let u  = arguments[1] || window.location.search;
       let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       let r = u.substr(u.indexOf("\?")+1).match(reg);
       return r!=null?r[2]:"";
    }
}