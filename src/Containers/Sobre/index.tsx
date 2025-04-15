import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () =>(
    <section>
        <Titulo fontSize={16}>Sobre</Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aut est totam similique soluta neque quod harum quae 
            praesentium 
            libero et reiciendis tenetur, 
            at necessitatibus repellendus, nobis fuga! Iusto, 
            architecto ut.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=DiperPines2&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DiperPines2&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre