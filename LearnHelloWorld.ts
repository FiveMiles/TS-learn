const hello : string = "Hello world!";
console.log(hello);

class Site {
    name():void {
        console.log("Runnoob")
    }
}

var obj = new Site();
obj.name();
/*
1、空白和换行 TS会忽略程序中出现的空格、制表符和换行符；
空格和制表符通常用来缩进代码，
2、TS区分大小写
分号可选，建议使用！
同一行多个语句，使用分号分割；
console.log("RUnnsdf1");console.log("Runssdf23");
3、TS注释
单行注释：//
多行注释：

4、TS与面向对象
TS是一种面向对象编程语言；
面向对象是一种对现实世界理解和抽象的方法；
面向对象主要有2个概念：对象和类；
对象：是类的一个实例，有状态和行为。例如一条狗是一个对象，它的状态有：颜色、名字、品种；
行为有：摇尾巴、叫、吃等；
类：类是一个模板，描述一类对象的行为和状态；
方法：方法是类的操作的实现步骤。


*/ 

