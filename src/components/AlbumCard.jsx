export default function albumCard({ thisAlbum }){
    return (
        <div calssname='album'>
        <h3>{thisAlbum.album}</h3>
        <p>{thisAlbum.year}, {thisAlbum.artist}</p>
        </div>
    )
}