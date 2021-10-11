/**
 * 1. 不传参数
 */
 function test(target) {
    target.isTestTable = true
}
@test
class TestClass {
    //

}

console.log(TestClass.isTestTable)