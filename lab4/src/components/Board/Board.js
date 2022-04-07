import './Board.css';

function Board(props) {
    const items = [...Array(64).keys()];
    const tiles = [];


    const horizontalTileHeaders = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h'
    };

    let verticalCounter = 8;
    let horizontalCounter = 1;
    for (const [index, value] of items.entries()) {
        let tileValue = '';
        let horizontalValue = '';
        let imageValue = '';
        if (index % 8 == 0) {
            tileValue = verticalCounter;
            verticalCounter--;
        }
        if (index > 55) {
            horizontalValue = horizontalTileHeaders[horizontalCounter];
            ++horizontalCounter;
        }
        if (props.tileFigure[index+1]) {
            imageValue = <img src={props.tileFigure[index+1]} width="100px"/>
        }
        tiles.push(
        <div className="tile" key={index}>
            {imageValue}
            <span className='vertical-value'>
                {tileValue}
            </span>
            <span className='horizontal-value'>
                {horizontalValue}
            </span>
        </div>)
    }

    return (
        <div className='board'>
            {tiles}
        </div>
    );
}

export default Board;