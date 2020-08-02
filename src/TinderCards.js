import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'



function TinderCards() {
    const[people,setPeople] = useState([]);

    
    useEffect(() => {
        //piece of code which runs on the component refresh

        database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })

    }, []);


    return (
        <div>
        <div className={"cardContainer"}>
            
            {people.map(person => {
             return <TinderCard
             className="swipe"
             key={person.name}
             preventSwipe={['up','down']}
             >
                        <div className="card"
                        style={{backgroundImage:`url(${person.url})`}}>
                            <h3 style={{color:'white'}}>{person.name}</h3>
                         </div>
                     </TinderCard>
            })}
    
        </div>
        </div>
    )
}

export default TinderCards;