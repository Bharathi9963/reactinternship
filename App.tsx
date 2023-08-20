
import './App.css'

function App() {
 var ab=10;
 var ba=20;
 var ar=[70,20,65,40]
 var br=[10,40,80,90]
 var ar3=[2,3,5,76,45,66]
 var fg='bhar'
 var name='praveen'
 var x='gubbala'
 var ar2=['bharathi','Reddy']
 var num=1
 var num1=134.12
 var br1=[10,20,40,[50,60]]
 //var f=prompt()
const img1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU'
const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU"
var im=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87PlguKqdxae5eRZDtmmKaPTc3WBpf9lItA&usqp=CAU']
 var img3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDYW7KmPsXBqNwJQpDdltzo1hV1s7iMz9Rg&usqp=CAU'
 var img4='data:image/jpeg;base64,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'
var obj={
  'firstname':'Bharathi',
  'lastname':"Reddy"
}


var students=[{
    'firstname':'bhar',
    'lastname':'Reddy'
},
{
  'firstname':'Divya',
    'lastname':'naidu'
},
{'firstname':'Resh',
    'lastname':'Rao'}
]
  
var students2=[{
  'firstname':'bhar',
  'lastname':'Reddy',
  'gender':'female'
},
{
'firstname':'Divya',
  'lastname':'naidu',
  "gender":'female'
},
{'firstname':'Raghu',
  'lastname':'Rao',
  'gender':"male"
}
]



  return (
    <>
      <h1>Welcome to JSX</h1>
      <div>{ab+ba}</div>
      <div>{`${name}${x}`}</div>
      <div>{name+x}</div>
      {
        ar.map((a)=>{
         
         return a
        })
      }
      <h1>{fg.toUpperCase()}</h1>
      {
        ar2.map((b)=>{
          return b
        })
      }
      <div>{Math.sqrt(num)}</div>
      <div>{Math.floor(num1)}</div>
      <div>{name.toUpperCase()}</div>
      <div>{name.length}</div>
      {
        name.split('').reverse().join('')  
     }
     <div>{ab>ba?ab:ba}</div>
     {
      num%2===0?(<span>even</span>):(<span>Odd</span>)
     }
     {
      num>0?(<div>Positive</div>):(<div>Negative</div>)
     }
     {
      ab>ba?(ab>num?(<h1>{ab}</h1>):(<h1>{num}</h1>)):(ba>num?(<h1>{ba}</h1>):(<h1>{num}</h1>))
     }
      
     <img src={num%2===0?img1:img2}></img>
     {
      ar.map((a)=>{
        return <li>{a}</li>
      })
      
     }


    {
      ar.map((a)=>{
        return <li>{a*a}</li>
      })
      
     }

     {
      ar.sort().map((a)=>{
        return a
      })
     }
     <li>{ar.concat(br).sort()}</li>



     {
      ar2.map((a)=>{
        return <li>{a.toLowerCase()}</li>
      })
     }

    <ul>
    {
      ar2.map((a)=>{
        return <li>{a.toUpperCase()}</li>
      })
     }
    </ul>

 <ol>
    {
      ar2.map((a)=>{
        return <li>{a.toLowerCase()}</li>
      })
     }
    </ol>


    {
      ar2.map((a)=>{
        return <li>{a.length}</li>
      })
    }

    

{
      ar2.map((a)=>{
        return <li>{a.slice(0,2)}</li>
      })
}

{
      ar2.map((a)=>{
        return <h1>{a.slice(0,1)}</h1>
      })
}

{
  ar2.map((a)=>{
    return <li>{a.split('').reverse().join('')}</li>
  })
}

{
      ar2.sort().map((a)=>{
        return a
      })
 }

{
  ar3.map((a)=>{
     return (a%2===0?<li>{a}</li>:<span></span>)
  })
}


{
  ar3.map((a)=>{
     return (a%2!==0?<li>{a}</li>:<span></span>)
  })
}
  
{
  ar3.map((a)=>{
     return (a>25?<h1>{a}</h1>:<span></span>)
  })
}


{
  <li>{br1.flat()}</li>
}

{
  ar3.map((a)=>{
     return (a%2===0?<li><i>{a}</i></li>:<li><b>{a}</b></li>)
  })
}

{
  ar3.map((a)=>{
     return (a<25?<h1>{a}</h1>:<span></span>)
  })
}


{
  ar3.reduce((acc,a)=>{
     return acc+a
  },0)
}


{
  im.map((k)=>{
    return <img src={k}></img>
  })
}

{
  im.map((k)=>{
    return <li><img src={k}></img></li>
  })
}
<table>
  <tr>
  {
  im.map((k)=>{
    return <td><img src={k} ></img></td>
  })
}
  </tr>
</table>

{
  Object.entries(obj).map((a)=>{
    return <li>{a[0]}:{a[1]}</li>
  })
}

{
  Object.entries(obj).map((a)=>{
    return <li>{a[0].toUpperCase()}:{a[1].toUpperCase()}</li>
  })
}
 


{
  students.map((a)=>{
     return  Object.entries(a).map((k)=>{
        return  <li>{k[0]}:{k[1]}</li>
      })
     
  })
}

<table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td></tr>
        
     })
    }
    
   </tbody>
</table>


<table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Image</th>
   </thead>
   <tbody>
    {
       students2.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td>
           <td><img src={a.gender==='female'?(img3):(img4)}></img></td>
           </tr>
        
     })
    }
    
   </tbody>
</table>


{
  students2.map((a)=>{
    return <div style={{border:'2px solid '}}>
      
      <h1>{a.firstname}{a.lastname}</h1>
      <h1>gender:{a.gender}</h1>
    </div>
  })
}
<br></br>
<br></br>
<div>
<div style={{border:'50px  solid skyblue'}} >
  {
    
    <div style={{border:'2px solid',marginBottom:'20px'}}>
      <h1>SLIDE 1</h1>
      
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDYW7KmPsXBqNwJQpDdltzo1hV1s7iMz9Rg&usqp=CAU'></img>
      <img src='data:image/jpeg;base64,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'></img>
    </div>
  }
 
  {
     <div style={{border:'2px solid', marginBottom:'10px'}}>
      <h1>SLIDE 2</h1>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU'></img>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU'></img> 
   </div>
  }
</div>
</div>













      
    </>
  )
}

export default App
