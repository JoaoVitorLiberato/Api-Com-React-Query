import { QueryClient, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export function Repo() {

    const params = useParams();
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient();

    async function handleChangeRepositoriesDescription() {
        const previousRepos = queryClient.getQueriesData<IProps[]>;

        if (previousRepos) {
            const nextRepos = previousRepos.map(repo => {
                if (repo.full_name === currentRepository) {
                    return {...repo, description: 'testando'}
                } else{
                    return repo;
                }
            }) 
            queryClient.setQueriesData('repos', nextRepos)    
        }
        
    }

    return(
        <>
            <h1>{currentRepository}</h1>
            <button onClick={handleChangeRepositoriesDescription}>alterar</button>
        </>
    )
}