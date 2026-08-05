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
    return <div className="item">
        <div className="item default-entries">
            <div className="name">Game Name: {name}</div>
            <div className="progress">Game progress: {progress}</div>
            <div className="status">Game Status: {status}</div>
        </div>
    </div>
}
