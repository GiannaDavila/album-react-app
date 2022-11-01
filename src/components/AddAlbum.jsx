import { useState } from "react"

export default function AddAlbum ({ setToggle, toggle }) {
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        //lets check if they entered all the data
        if (!album || !artist || !year){
            alert('Please enter all info')
            return
        }
        const newAlbum = { artist, album, year }
        fetch('https://albums-api-gd.web.app/albums',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
        .then(() => {
            setToggle(!toggle)
            setAlbum('')
            setArtist('')
            setYear('')
        })
        .catch(alert)
    }
    return(
        <secction classname="add-album">
            <h3>Add New Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                <input type="text" name= "album" required
                onChange={e => setAlbum(e.target.value)} 
                value={album}/>
                </label>
                <br/>
                <label htmlFor="artist">Artist:
                <input type="text" name= "artist" required
                onChange={e => setArtist(e.target.value)} 
                value={artist}/>
                </label>
                <br/>
                <label htmlFor="year">Year:
                <input type="numbers" name= "year" required
                onChange={e => setYear(e.target.value)} 
                value={year}/>
                </label><br/>
                <input Type="submit" value="Add Album" ></input>
            </form>
        </secction>
    )
}