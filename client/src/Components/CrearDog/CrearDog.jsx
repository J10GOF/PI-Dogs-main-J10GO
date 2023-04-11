import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, getCreatedDogs } from "../../actions/actions.js";

export default function CreatedDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !isNaN(input.heightMin) &&
      !isNaN(input.heightMax) &&
      !isNaN(input.weightMin) &&
      !isNaN(input.weightMax) &&
      input.life_span.includes("años") &&
      input.image.includes("https://") &&
      input.temperament.length !== 0
      ) {
    dispatch(getCreatedDogs(input));
    alert("¡Perro creado con éxito!");
    setInput({
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_span: "",
      image: "",
      temperament: [],
    });
    history.push('/home');
    } else {
      alert("Toda la información sobre el nuevo perro debe estar completa y debe ser válida");
    } 
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  return (
    <div>
      <Link to="/home">
        <button>Regresar</button>
      </Link>
      <h1>Crear un perro nuevo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Nombre -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="name"
              value={input.name}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Altura mínima -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="heightMin"
              value={input.heightMin}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Altura máxima -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="heightMax"
              value={input.heightMax}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Peso mínimo -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="weightMin"
              value={input.weightMin}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Peso máximo -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="weightMax"
              value={input.weightMax}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Años de vida -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="life_span"
              value={input.life_span}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Imagen -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="image"
              value={input.image}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Temperamentos -
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="temperament"
              value={input.temperament}
              required
            />
          </label>
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {temperament.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        {/* <ul>
          <li>{input.temperament.map((el) => el + ", ")}</li>
        </ul> */}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

//Formulario Controlado
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere el nombre";
  }

  if (!input.heightMin) {
    errors.heightMin = "Se requiere altura mínima";
  } else if (!/^([0-9])*$/.test(input.heightMin)) {
    errors.heightMin = "La altura mínima debe ser un número";
  }

  if (!input.weightMin) {
    errors.weightMin = "Se requiere peso mínimo";
  } else if (!/^([0-9])*$/.test(input.weightMin)) {
    errors.weightMin = "El peso mínimo debe ser un número";
  }

  if (!input.life_span) {
    errors.life_span = "Se requiere tiempo de vida";
  } else if (!input.life_span.includes("years")) {
    errors.life_span = "La edad del perro debe incluir la palabra (años)";
  }

  if (!input.image) {
    errors.image = "La URL de la imagen es obligatoria";
  } else if (!input.image.includes("years")) {
    errors.image = "La imagen debe tener una url válida (formato https://)";
  }

  if (!input.temperament) {
    errors.temperament = "Se requieren temperamentos";
  }
  return errors;
}