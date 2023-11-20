
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, } from "react-bootstrap";
import './Header.css';

function Header() {
    return (
        <div className="menu">
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        Menu
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu-site" />
                    <Navbar.Collapse id="menu-site">
                        <Nav  className="luzinha">
                            <Nav.Item>
                                <Link className="nav-link" to="/">Inicial</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/contato">Contato</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;