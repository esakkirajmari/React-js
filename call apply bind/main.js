                            // call 
var obj1={
    num:2,
};
var obj2={
    f1:function(a){
        console.log(this.num+a);
    }
};
obj2.f1.call(obj1,2);

                            // apply
var obj1={
    num:2,
};
var obj2={
    f1:function(a,b,c){
        console.log(this.num+a+b+c); 
    }
};
obj2.f1.apply(obj1,[2,"hello","world"]); // apply method must array bracket


                    // bind
var obj1={
    num:2,
};
var obj2={
    f1:function(a,b,c){
        console.log(this.num+a+b+c);  // new function create var call  click pannum poothu than trigger agum
    }
};
var res=obj2.f1.bind(obj1,2,"hello","world");
res();
