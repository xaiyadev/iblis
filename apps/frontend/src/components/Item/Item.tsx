import './item.css';

export enum status {
    PLANNING,
    PLAYING,
    FINISHED,
}

export default function(
    { name, progress, status }: 
    { name: string, progress: number, status: status }
) {
    return <ul className="item">
        <li className="name">Game Name: {name}</li>
        <li className="progress">Game progress: {progress}</li>
        <li className="status">Game Status: {status}</li>
    </ul>
}
