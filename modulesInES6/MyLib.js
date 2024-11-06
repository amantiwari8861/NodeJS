function add(a,b,...others) 
{
    let sum=a+b;
    for (const e of others) 
    {
        sum+=e;
    }
    return sum;
}
function multiply(a,b,...others) 
{
    let sum=a*b;
    for (const e of others) 
    {
        sum*=e;
    }
    return sum;
}
let data={multiply,"age":25};
export default add;
export {data}
