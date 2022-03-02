var stack=[]
const convertToPostFix=()=>{
    let input=document.getElementById('input').value
    const inputtext=document.getElementById('inputtext')
    input=input.replaceAll(' ','')
    input=input.toUpperCase()
    inputtext.innerText=input
    let length=input.length
    let answer=''

    output=''
    // (A+B)/C-(B-C)
    arr=input.split('');
    for(i=0; i<length; i++){
        if(arr[i]=='('){
            stack.push(arr[i]);
        }
        else if(arr[i]>='A' && arr[i]<='Z'){
            output+=arr[i]
            console.log(output)
        }
    }
}

const push=(item)=>{
    stack.push(item)
}
const pop=()=>{
    const x=stack.pop()
    return x
}