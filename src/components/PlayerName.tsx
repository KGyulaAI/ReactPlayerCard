import { useState } from "react";

const PlayerName = () => {
    const [isPlayerEdit, setPlayerEdit] = useState<boolean>(true);
    const handlePlayerEdit = ()=>{
      setPlayerEdit(!isPlayerEdit)
    }
  return (
    <div>
        {isPlayerEdit?
        (<div onClick={handlePlayerEdit} className="playerName">
          <h1>Player Name</h1>
        </div>
        )
        :
        (
          <form>
            <input type="text" name="" id=""/>
            <button type="button">Save</button>
          </form>
        )}
    </div>
  )
}

export default PlayerName