
import './CharacterCard.css';
import {Character} from "../model/Chracter";

type CharacterCardProps = {
    CharacterCard: Character;
}
export default function CharacterCard(props: CharacterCardProps){
    return(
        <div className="card">
            <div className="character-card">
                <h3>{props.CharacterCard.name}</h3>
                <img src={props.CharacterCard.image} alt={"Character Avater"}/>
                <p>{props.CharacterCard.status}</p>
            </div>
        </div>


        )
}