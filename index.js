var stack=[]
const input1=document.getElementById('input')

input1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });
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
    tbody.innerText=''
    tbody.className='fs-3'
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
        if(arr[i]=='('){
            if(i!=0 && !(arr[i-1]=='+'||arr[i-1]=='-'||arr[i-1]=='*'||arr[i-1]=='/' || arr[i-1]=='(')){
                tbody.className='bg-warning'
                tbody.innerText=''
                output=''
                alert('Thappor chinos? thik input de')
                
                break;
            }
            stack.push(arr[i]);
        }
        else if(arr[i]=='+'||arr[i]=='-'||arr[i]=='*'||arr[i]=='/'){
            // console.log(output[output.length-1])
            // if(output[output.length-1]=='+' ||output[output.length-1]=='-' ||output[output.length-1]=='*' ||output[output.length-1]=='/'){
            //     alert('Thappor chinos? thik input de')
            // }
            if(i==0 || i==arr.length-1 ||arr[i-1]=='+'||arr[i-1]=='-'||arr[i-1]=='*'||arr[i-1]=='/'){
                tbody.className='bg-warning'
                tbody.innerText=''
                output=''
                alert('Thappor chinos? thik input de')
                
                break;
            }
            else if(arr[i]=='+' ||arr[i]=='-'){
                if(stack[stack.length-1]=='*' ||stack[stack.length-1]=='/' ||stack[stack.length-1]=='+' ||stack[stack.length-1]=='-'){
                    let x=stack.pop()
                    output+=x
                }
                stack.push(arr[i])
            }
            else{
                if(stack[stack.length-1]=='*' ||stack[stack.length-1]=='/'){
                    let x=stack.pop()
                    output+=x
                }
                stack.push(arr[i])
            }
        }
        else if((arr[i]>='A' && arr[i]<='Z') ||(arr[i]>='0' && arr[i]<='9')){
            output+=arr[i]
        }
        else if(arr[i]==')'){
            if(stack.length==0){
                tbody.className='bg-warning'
                tbody.innerText=''
                output=''
                alert('Thappor chinos? thik input de')
            }
            while(stack[stack.length-1]!='('){
                if(stack.length==0){
                    tbody.className='bg-warning'
                    tbody.innerText=''
                    output=''
                    
                    alert('Thappor chinos? thik input de')
                    break;
                }
                const operator=stack.pop()
                output+=operator
            }
            stack.pop()
            
            
        }
        td1.innerText=arr[i]
        td2.innerText=output
        td3.innerText=stack.toString().replaceAll(',','')
        
        // adding end
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
    }
    if(stack.length!=0){

        while(stack.length!=0){
        if(stack[stack.length-1]!='('){
            tr=document.createElement('tr')
            td1=document.createElement('td')
            td2=document.createElement('td')
            td3=document.createElement('td')
            let x=stack.pop();
            alert('stack '+stack.length)
            output+=x;
                td1.innerText=''
                td2.innerText=output
                td3.innerText=stack.toString().replaceAll(',','')
        
        
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tbody.appendChild(tr)
        }
        stack.pop()
            
        }
    }
    stack=[]

    // answer.innerText=output
    
}

const push=(item)=>{
    stack.push(item)
}
const pop=()=>{
    const x=stack.pop()
    return x
}