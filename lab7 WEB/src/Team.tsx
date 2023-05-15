import {Link} from "react-router-dom";
export function Team() {
    return(
        <div className="start_img">
            <div className="container_team">
                <Link to="/team/players" className="card_team1">
                    <div className="hover_card">Players</div>
                </Link>
                <Link to="/team/matches" className="card_team2">
                    <div className="hover_card">Matches</div>
                </Link>
            </div>
        </div>
    );
}