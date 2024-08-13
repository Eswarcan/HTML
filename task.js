function x(x,y,z){
    console.log(x,y,z());
}
x(10, 20, ()=>{
    return "Shaani";
});