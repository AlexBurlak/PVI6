import { Container, Row, Col, Nav, NavItem, NavLink, Navbar } from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <Navbar className="header-links">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex">
                        <Nav.Item>
                            <Nav.Link href="https://www.chess.com/learn-how-to-play-chess">Chess rules</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://www.chess.com/puzzles/problem/41839">
                                Puzzle
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;