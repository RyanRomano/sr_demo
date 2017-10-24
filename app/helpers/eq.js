import { helper } from '@ember/component/helper';

// {{#if (eq reportItem.sat.reading.min "N/A")}}
//if param0 (reportItem.sat.reading.min) === param1 ("N/A")
const eq = (params) => params[0] === params[1];
export default helper(eq);
