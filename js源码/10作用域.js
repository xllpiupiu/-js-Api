var a = "global var";
function foo(){
    console.log(a);
}
function outerFunc(){
    var a = "var in outerFunc";
    function innerFunc(){
        var a = "var in innerFunc";
        foo();
    } 
    innerFunc();
}
outerFunc()