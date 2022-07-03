import {useQuery} from 'react-query'
import axios from  'axios'
import { Link } from 'react-router-dom';

interface IProps{
  full_name: string;
  description: string;
}

export function Repos() { 
    const {data, isFetching} = useQuery<IProps[]>('repos', async () => {
     const response = await axios.get('https://api.github.com/users/JoaoVitorLiberato/repos');
     return response.data;
    }, 
    {
        staleTime: 1000 * 60,
    }
    )
     return (
      <>
         <ul>
           {isFetching && <p>Caregando...</p>}
           {data?.map( repos => {
             return(
               <li key ={repos.full_name}>
                  <Link to={`repos/${repos.full_name}`} >{repos.full_name}</Link>
                  <p>{repos.description}</p> 
               </li>
             )
           })}
         </ul>
      </>
     )
   }
   