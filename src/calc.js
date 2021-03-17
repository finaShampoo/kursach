import * as mathjs from 'mathjs';

const { abs } = Math;

const { derivative, evaluate } = mathjs;

export default function calc(functionString, a_b, eps) {
  function _f(x) {
    return evaluate(functionString, { x });
  }
  function _df(x) {
    return derivative(functionString, 'x').evaluate({ x });
  }
  function _d2f(x) {
    return derivative(derivative(functionString, 'x'), 'x').evaluate({ x });
  }
  function newtonForOne(f, df, d2f, [a, b], eps) {
    let i = 0;
    let x0; let
      xn;
    i = 0;
    if (a > b) {
      x0 = a;
      a = b;
      b = x0;
    }
    if (f(a) * f(b) > 0) console.log('\nError! No roots in this interval\n');
    else {
      if (f(a) * d2f(a) > 0) x0 = a;
      else x0 = b;
      xn = x0 - f(x0) / df(x0);
      while (abs(x0 - xn) > eps) {
        x0 = xn;
        xn = x0 - f(x0) / df(x0);
      }
    }
    return xn;
  }
  return newtonForOne(_f, _df, _d2f, a_b, eps);
}
