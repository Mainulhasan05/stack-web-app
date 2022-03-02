var stack=[]
const convertToPostFix=()=>{
    let input=document.getElementById('input').value
    const inputtext=document.getElementById('inputtext')
    let answer=document.getElementById('answer')
    input=input.replaceAll(' ','')
    input=input.toUpperCase()
    inputtext.innerText=input
    let length=input.length

    output=''
    // (A+B)/C-(B-C)
    arr=input.split('');
    for(i=0; i<length; i++){
        if(arr[i]=='(' ||arr[i]=='+'||arr[i]=='-'||arr[i]=='*'||arr[i]=='/'){
            stack.push(arr[i]);
        }
        else if(arr[i]>='A' && arr[i]<='Z'){
            output+=arr[i]
            console.log(output)
        }
        else if(arr[i]==')'){
            const operator=stack.pop()
            output+=operator
            
        }
    }
    answer.innerText=output
}

const push=(item)=>{
    stack.push(item)
}
const pop=()=>{
    const x=stack.pop()
    return x
}