import React, { useContext, useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { goToListPage } from "../../routes/Coordinator"
import { ContainerHomePage, HeaderHomePage, ButtonList, ButtonAdd } from "./HomePageStyled"
import picachu from "../../img/pokemon.png"
import pokelist from "../../img/pokelist.png"
import { Logo } from "./HomePageStyled"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ImagePokemon, Card, ButtonsAndName , Tittle , Buttons } from "./HomePageStyled"
import { Modal } from "../../components/Modal"




const HomePage = () => {
    const navigate = useNavigate()
    const [isModalVisible , setIsModalVisible] = useState(false)
    const { pokemons, pokedex, setPokedex, addPokemonOnPage , getPokemonNames , addMorePokemon} = useContext(GlobalStateContext)

    useEffect(() => {getPokemonNames()}, [addMorePokemon])


    const showPokemonDetails = (name) => {
        localStorage.setItem("pokemon" , name)
        setIsModalVisible(true)
    }

    const addPokemon = (id, img, name) => {
        const index = pokedex.findIndex((noDuplicate) => {
            if (noDuplicate.id === id) {
                return true
            } else {
                return false
            }
        })

        if (index === -1) {
            const pokeInPokedex = {
                id: id,
                img: img,
                name: name
            }
            const pokedexCopy = [...pokedex, pokeInPokedex]
            setPokedex(pokedexCopy)
            alert("Pokémon adicionado com sucesso.")
        } else {
            return alert("Pokémon já consta na pókedex.")
        }

    }


    const showPokemon = pokemons && pokemons.map((poke) => {
        return (
            <Card>
                <ButtonsAndName>
                    <Tittle>{poke.name}</Tittle>
                    <Buttons onClick={() => addPokemon(poke.id, poke.sprites.other.dream_world.front_default, poke.name)} >Add Pokédex</Buttons>
                    <Buttons onClick={() =>showPokemonDetails(poke.name)} >Ver detalhes</Buttons>
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                </ButtonsAndName>
                <ImagePokemon src={poke.sprites.other.dream_world.front_default} alt="PicachuReader" ></ImagePokemon>
            </Card>
        )
    })



    return (
        <>
            <HeaderHomePage>
                <ButtonList onClick={() => goToListPage(navigate)} ><img src={pokelist} alt="picachuHeader" /></ButtonList>
                <Logo src={picachu} />
            </HeaderHomePage>

            <ContainerHomePage>
                {showPokemon}
                <ButtonAdd onClick={() => addPokemonOnPage()}>Mais Pokémons</ButtonAdd>
            </ContainerHomePage>


        </>
    )
}


export default HomePage