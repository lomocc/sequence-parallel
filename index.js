/**
 * sequence-parallel
 * Functional Programming with Sequence and Parallel
 * Created by vincent on 2018/02/08.
 *
 */
function sequence(){
  var funcs = Array.prototype.slice.call(arguments);
  return function(value){
    return funcs.reduce(function(lastValue, func){
      return typeof func == 'function'?func(lastValue):lastValue;
    }, value);
  };
}
function parallel(){
  var funcs = Array.prototype.slice.call(arguments);
  var combineFunc = funcs.pop();
  return function(value){
    var values = funcs.map(function(func){
      return typeof func == 'function'?func(value):null;
    });
    return typeof combineFunc == 'function'?combineFunc.apply(null, values):values;
  };
}
sequence.sequence = sequence;
sequence.parallel = parallel;
module.exports = sequence;
