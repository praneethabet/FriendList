import React from 'react'
import Person from './Person'

export default function PersonList() {
    const people=[
        { 
         img:22,
         name:"John",
         job:"Developer"   
        },
        {
            img:34,
         name:"Bob",
         job:"Designer" 
        },
        { 
            img:66,
            name:"Jon",
            job:"Artist" }
    ]
    return (
       <section>
           <Person person={people[0]}/>
           <Person person={people[1]}>
               <p>He is a UX Designer.He is good in WireFrames,HTML,CSS,BootStrap.</p>
           </Person>
           <Person person={people[2]}/>

       </section>
            
       
    );
};
// const Person=(props)=> {
//     const{img,name,job} = props.person;
//     const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
//     return (
//         <div className="person">
//          <img src={url} alt=""/> 
//          <h4>{name}</h4> 
//          <h4>{job}</h4> 
//         </div>
//     )
// }
