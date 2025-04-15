import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const SideBar = () =>(
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Pablo</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>DiperPines2</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default SideBar