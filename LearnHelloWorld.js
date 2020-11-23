var hello = "Hello world!";
console.log(hello);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runnoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
