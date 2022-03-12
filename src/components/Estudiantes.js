import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/actionLogin";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/FileUpload";
import { listEstudent, registerStudent } from "../actions/actionStudent"
import { ListarEstudiantes } from "./ListarEstudiantes";

const Estudiantes = ({ history }) => {
  const dispatch = useDispatch();

  const [values, handleInpuntChange, reset] = useForm({
    documento: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    celular: "",
    direccion: "",
    correo: "",
    imagen: "",
  });

  let {
    documento,
    nombre,
    apellidos,
    telefono,
    celular,
    direccion,
    correo,
    imagen,
  } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      registerStudent(
        documento,
        nombre,
        apellidos,
        telefono,
        celular,
        direccion,
        correo,
        imagen
      )
    );
  };

  const handleLogout = () => {
    dispatch(logout());
    history.replace('/login');
}

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        imagen = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(listEstudent())
  }, [])
  

  return (
    <div>
      <form onSubmit={handleRegistro}>
        <h1>Estudiantes</h1>
        <div className="form-group">
          <div className="form-group col-md-4">
            <label htmlFor="documento">Documento</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              id="documento"
              value={documento}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="nombres">Nombres</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              className="form-control"
              type="text"
              name="apellidos"
              id="apellidos"
              value={apellidos}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              id="telefono"
              value={telefono}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="celular">Celular</label>
            <input
              className="form-control"
              type="text"
              name="celular"
              id="celular"
              value={celular}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="direccion">Dirección</label>
            <input
              className="form-control"
              type="text"
              name="direccion"
              id="direccion"
              value={direccion}
              onChange={handleInpuntChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="direccion">Correo</label>
            <input
              className="form-control"
              type="text"
              name="correo"
              id="correo"
              value={correo}
              onChange={handleInpuntChange}
            />
          </div>
          <br />
          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              value={imagen}
              style={{ display: "none" }}
              onChange={handleFileChanged}
            />

            <button className="btn btn-success" type="button" onClick={handlePictureClick}>
              Imagen
            </button>
          </div>

          <div>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </div>
      </form>
      <ListarEstudiantes />
    </div>
  );
};

export default Estudiantes;
