import { helper } from '@ember/component/helper';

export function gpacolor(params/*, hash*/) {
  const gpa = parseFloat(params[0]['50%']);
  if (gpa < 3.6) {
    return "#75ace5";  
  } else if(gpa < 3.7){
    return "#87abe1";
  } else if (gpa < 3.72){
    return "#9fa9db"
  } else if (gpa < 3.8){
    return "#a6a8da";
  } else if (gpa < 3.82){
    return "#b4a7d6";
  } else if (gpa < 3.86){
    return "#b8a1cb";
  } else if (gpa < 3.9){
    return "#c194b5";
  } else if (gpa < 4.5){
    return "#d7737d";
  }
}

export default helper(gpacolor);
