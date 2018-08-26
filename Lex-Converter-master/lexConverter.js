const Num = Symbol('num');
const Op = Symbol('op');
const opsArray = {
  sum: '+',
  mul: '*',
  sub: '-',
  div: '/'
};
const opsPerformedArray = {
  sum: args => args.reduce((a, b) => a + b, 0),
  sub: args => args.reduce((a, b) => a - b),
  div: args => args.reduce((a, b) => a / b),
  mul: args => args.reduce((a, b) => a * b, 1)
};

function parseLex(input){
  input = input.split(" ").map(str => str.trim()); //Split at Space
  return input.filter(str => str.length);
}

//-Return the corresponding value, if the node is number type.
function decompose(input){
  var cntr = 0;
  var pivot = () => input[cntr];
  var start = () => input[cntr++];

  var pNum = () => ( //Set up Numbers
    {
      val: parseInt(start()),
      type: Num
    });

  var pOp = () => { //Create Operation
    var obj = {
      val: start(),
      type: Op,
      expr: []
    };
    while (pivot()){
      obj.expr.push(pExp());
    }
    return obj;
  };

  var pExp = () => /\d/.test(pivot()) ? pNum() : pOp(); //Test Meta Character

  return pExp();
};

//Perform the corresponding arithmetic operation, if it is anoperation node.
function performOps(input) {
  if (equalsNum(input)){
     return input.val;
  }
  return opsPerformedArray[input.val](input.expr.map(performOps));
};
//Helper Method
function equalsNum(input){
  if (input.type === Num){
    return true;
  }else{
    return false;
  }
}

//Actual Functions that are used!
function math(input){
  input = parseLex(input);
  input = decompose(input);
  return performOps(input);
}
function convert(input) {
  input = parseLex(input);
  input = decompose(input);
  var nums = input => input.val;
  var ops = input => `(${
                                  input.expr.map(create).join(" " + opsArray[input.val] + " ")
                                })`;
  var create = input => input.type === Num ? nums(input) : ops(input);
  return create(input);
}
