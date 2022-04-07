import './Central.css';
import { Container, Row, Col } from 'react-bootstrap';
import UserForm from '../UserForm/UserForm';
import Board from '../Board/Board';
import Timer from '../Timer/Timer';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Central() {
    

    const blackRookLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png';
    const blackKnightLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png';
    const blackPawnLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png';
    const blackQueenLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png';
    const blackKingLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png';
    const blackBishopLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png';

    const whitePawnLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png';
    const whiteBishopLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png';
    const whiteQueenLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png';
    const whiteRookLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png';
    const whiteKingLink = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png';

    const tileFigure = {
        1: blackRookLink,
        2: blackKnightLink,
        6: blackRookLink,
        7: blackKingLink,
        10: blackPawnLink,
        11: blackQueenLink,
        14: blackPawnLink,
        16: blackPawnLink,
        17: blackPawnLink,
        20: blackPawnLink,
        22: blackBishopLink,
        23: blackPawnLink,
        24: whiteBishopLink,
        28: whitePawnLink,
        33: whitePawnLink,
        37: whiteQueenLink,
        43: whitePawnLink,
        44: whiteBishopLink,
        54: whitePawnLink,
        55: whitePawnLink,
        56: whitePawnLink,
        59: whiteRookLink,
        61: whiteRookLink,
        63: whiteKingLink
    }

    let figureCountArray = [0, 0, 0, 0, 0, 0];
    for (const key in tileFigure) {
        let value = tileFigure[key];
        if(value == blackRookLink || value == whiteRookLink) {
            figureCountArray[1]++;
        } else if (value == blackKnightLink) {
            figureCountArray[5]++;
        } else if (value == blackPawnLink || value == whitePawnLink) {
            figureCountArray[0]++;
        } else if (value == blackBishopLink || value == whiteBishopLink) {
            figureCountArray[2]++;
        } else if (value == blackQueenLink || value == whiteQueenLink) {
            figureCountArray[3]++;
        } else {
            figureCountArray[4]++;
        }
    }

    const labels = [
    'Pawns',
    'Rooks',
    'Bishops',
    'Queens',
    'Kings',
    'Knights',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Chese pieces',
            backgroundColor: 'rgb(118, 150, 86)',
            borderColor: 'rgb(118, 150, 86)',
            data: figureCountArray,
        }]
    };

    return (
        <Container>
            <Row>
                <Col xs="4">
                    <UserForm />
                    <Timer />
                </Col>
                <Col xs="8">
                    <Board tileFigure={tileFigure}/>
                    <Line data={data} />
                </Col>
            </Row>
        </Container>
    );
}

export default Central;