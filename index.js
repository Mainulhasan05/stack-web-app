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
            stack.push(arr[i]);
        }
        else if(arr[i]=='+'||arr[i]=='-'||arr[i]=='*'||arr[i]=='/'){
            // console.log(output[output.length-1])
            // if(output[output.length-1]=='+' ||output[output.length-1]=='-' ||output[output.length-1]=='*' ||output[output.length-1]=='/'){
            //     alert('Thappor chinos? thik input de')
            // }
            if(arr[i-1]=='+'||arr[i-1]=='-'||arr[i-1]=='*'||arr[i-1]=='/'){
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
        else if(arr[i]>='A' && arr[i]<='Z'){
            output+=arr[i]
            console.log(output)
        }
        else if(arr[i]==')'){
            while(stack[stack.length-1]!='('){
                const operator=stack.pop()
                output+=operator
            }
            
            
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
    if(stack.length!=0){
        while(stack.length!=0 && stack[stack.length-1]!='('){
    tr=document.createElement('tr')
    td1=document.createElement('td')
    td2=document.createElement('td')
    td3=document.createElement('td')
    let x=stack.pop();
    console.log("poped  "+x)
    output+=x;
        td1.innerText=''
        td2.innerText=output
        td3.innerText=stack


        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
            
        }
    }

    // answer.innerText=output
}

const push=(item)=>{
    stack.push(item)
}
const pop=()=>{
    const x=stack.pop()
    return x
}