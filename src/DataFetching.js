import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './DataFetching.css'
import { Button } from '@material-ui/core'
// import { render } from 'react-dom'









const DataFetching = () => {




    const[posts,setPosts] =useState ([])

    const [view,setView] =useState ([])

    useEffect(() =>{
        axios.get('https://us-east4-frapp-prod.cloudfunctions.net/dumdum-brand-details')
        .then(res =>{

            console.log(res)
            setPosts(res.data)
            setView(res.data.organizationType)

        })
        .catch(err =>{

            console.log(err)

        })

    },[])


    
   
        
    return (
        <div class="main">

            <div class="title">
            <form>
            <h2 >Title:{posts.title}</h2>
            <p>  <label type="date">Starting Date :</label>{posts.startDate}</p>
                <br />
                <br />
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <p><label type="date">Ending Date :</label>{posts.endDate} </p>
            <br />
            <p><label type="description">Description:</label> {posts.description}</p>
            
            
            
            <div>

            {posts.kycDocs && posts.kycDocs.map((item) =>
            <div>
                
            <label>    <p>{item.title}:</p></label>  <a href={item.url} >Click here</a>
               
            
                </div>
            )}

            <br />

                    <div><h3>{view.title} :</h3></div>

        
        { view.options && view.options.map((item,i) => {
          return <select type="checkbox" id={i} value={item.optionVal} > 
              <option > {item.optionText}</option><br />
                 </select>
        })}
      






             <h4>Is the Brand Active ? <br /></h4>{posts.active ? 'Yes' : 'No'}
                 
                 
                 <br />



                <button type="submit"  >Save</button>

             
             </div>
             </form>
            </div>
            
            <div>





            </div>



            
        </div>
    )
}

export default DataFetching
