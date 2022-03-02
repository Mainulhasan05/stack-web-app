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

    tbody=document.getElementById('tbody')
    // tr=document.createElement('tr')
    // td1=document.createElement('td')
    // td2=document.createElement('td')
    // td3=document.createElement('td')
    // td1.innerText='Mainul'
    // td2.innerText='Hasan'
    // td3.innerText='Rifat'
    // tr.appendChild(td1)
    // tr.appendChild(td2)
    // tr.appendChild(td3)
    // tbody.appendChild(tr)
    // (A+B)/C-(B-C)
    arr=input.split('');
    for(i=0; i<length; i++){
    tr=document.createElement('tr')
    td1=document.createElement('td')
    td2=document.createElement('td')
    td3=document.createElement('td')
    // add data
    td1.innerText=arr[i]
    td2.innerText=output
    td3.innerText=stack
    // end
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
        td1.innerText=arr[i]
        td2.innerText=output
        td3.innerText=stack
        // adding end
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
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