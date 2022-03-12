import { Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useForm } from "../hooks/useForm"

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: 'Camilo',
        email: 'Camilo@gmial.com',
        pass1: 'pass1',
        pass2: 'pass2',
    })

    const { nombre, email, pass1, pass2 } = formValues; 

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }

    return (
        <div>
            <Form onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/">Login</Link>

            </Form>

        </div>
    )
}