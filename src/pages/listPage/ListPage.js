import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/Coordinator"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ContainerListPage, HeaderListPage , Arrow} from "./ListPageStyled"
import picachu from "../../img/pokemon.png"
import arrow from "../../img/leftArrow.svg"
import { Logo, Card, ButtonsAndName, Tittle , Buttons , ImagePokemon , ButtonBack} from "./ListPageStyled"


const ListPage = () => {
    const navigate = useNavigate()
    const { pokedex, getPokemonDetails } = useContext(GlobalStateContext)

    const deletePokemon = (index) => {
        if (window.confirm("Deseja deletar?")) {
            pokedex.splice(index, 1)
            getPokemonDetails()
        }

    }

    const pokedexList = pokedex.map((pokeList, index) => {
        return (
            <Card key={pokeList.id}>
                <ButtonsAndName>
                    <Tittle> {pokeList.name}</Tittle>
                    <Buttons onClick={() => deletePokemon(index)}>Deletar</Buttons>
                </ButtonsAndName>
                <ImagePokemon src={pokeList.img} alt="randomPokemon" />
            </Card>
        )
    })

    return (
        <>
            <HeaderListPage>
                <ButtonBack onClick={() => goBack(navigate)}><Arrow src={arrow}/></ButtonBack>
                <Logo src={picachu} />
            </HeaderListPage>
            <ContainerListPage>
                {pokedexList}
            </ContainerListPage>

        </>
    )
}

export default ListPage