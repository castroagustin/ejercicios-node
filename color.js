var getNum0to255 = function () { return Math.floor(Math.random() * 255); };
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "rgb(".concat(getNum0to255(), ", ").concat(getNum0to255(), ", ").concat(getNum0to255(), ")");
        return color;
    };
    return Color;
}());
var color = new Color;
console.log(color.get());
