/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    const regex = /(gal|L|lbs|kg|mi|km)/g;
    const regex2 = /\//g;

    var result = input.slice(0, input.search(regex));

    if (result.search(regex2) !== -1) {
      result = result.split("/");
      result = result[0] / result[1];
    }
    result = parseFloat(result)
      .toFixed(5)
      .replace(/0+$/, "");
    if (result.charAt(result.length - 1) === ".") {
      result = result.slice(0, result.length - 1);
    }
    if (result == 'NaN') {
      console.log('q')
      return "invalid number";
    } else {
      return result;
    }
  };

  this.getUnit = function(input) {
    const regex = /(gal|L|lbs|kg|mi|km)/g;

    var result = input.match(regex);
    if (result) {
      result = result[0];
    } else {
      result = "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * miToKm;
        break;
    }

    return parseFloat(result)
      .toFixed(5)
      .replace(/0+$/, "");
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);

    return result;
  };
}

module.exports = ConvertHandler;
