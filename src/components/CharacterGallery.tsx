import {Character} from "../model/Chracter";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css';
type CharacterGalleryProps = {
    characters:Character[];
    filterText:string;
}
export default function CharacterGallery(props: CharacterGalleryProps){

    return(
        <div className={"cards"}>
            {props.characters.map(
                (character) =>{
                    if(character.name.toLowerCase().includes(props.filterText.toLowerCase())){
                        return <CharacterCard CharacterCard={character}/>
                    }
                }
            )}
        </div>

    )
}