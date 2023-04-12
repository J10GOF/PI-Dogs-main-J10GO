import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, getCreatedDogs } from "../../actions/actions.js";
import style from './CrearDog.module.css'

export default function CreatedDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});
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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    console.log(input.temperament.length);
    e.preventDefault();
    if (Object.values(errors).length === 0 && input.temperament.length !== 0) {
    dispatch(getCreatedDogs(input));
    alert("¡Perro creado con éxito!");
    history.push('/home');
    } else {
      alert("Toda la información sobre el nuevo perro debe ser completa y válida, también debe seleccionar un temperamento");
    } 
  }

  function handleSelect(e) {
    if (input.temperament.length < 4) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
      let temps = input.temperament;
      let findTemp = temps.indexOf(e.target.value);
      if (findTemp >= 0) {
        temps.splice(findTemp, 1);
      } else {
        temps.push(e.target.value);
      }
      setInput({
        ...input,
        temperament: temps,
      });
    } else {
      alert("Solo puedes seleccionar 4 temperamentos");
    }
  }

  return (
    <div className={style.Crear}>
      <Link to="/home">
        <button className={style.atras}>Regresar</button>
      </Link>
      <h1 className={style.titulo}>CREA TU PROPIO PERRO</h1>
      <form className={style.formulario} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={style.label}>Nombre: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="name"
              value={input.name}
              required
            />
          <span className={style.validation}>
            {errors.name && <p>{errors.name}</p>}
          </span>
        </div>

        <div>
          <label className={style.label}>Altura mínima: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="heightMin"
              value={input.heightMin}
              required
            />
            <span className={style.validation}>
              {errors.heightMin && <p>{errors.heightMin}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Altura máxima: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="heightMax"
              value={input.heightMax}
              required
            />
            <span className={style.validation}>
              {errors.heightMax && <p>{errors.heightMax}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Peso mínimo: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="weightMin"
              value={input.weightMin}
              required
            />
            <span className={style.validation}>
              {errors.weightMin && <p>{errors.weightMin}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Peso máximo: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="weightMax"
              value={input.weightMax}
              required
            />
            <span className={style.validation}>
              {errors.weightMax && <p>{errors.weightMax}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Años de vida: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="life_span"
              value={input.life_span}
              required
            />
            <span className={style.validation}>
              {errors.life_span && <p>{errors.life_span}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Imagen: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="image"
              value={input.image}
              required
            />
            <span className={style.validation}>
              {errors.image && <p>{errors.image}</p>}
            </span>
        </div>

        <div>
          <label className={style.label}>Temperamentos: </label>
            <input
              className={style.input}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="temperament"
              value={input.temperament}
            />
            {/*<span className={style.validation}>
              {errors.life_span && <p>{errors.life_span}</p>}
            </span>*/}
        </div>

        <select onChange={(e) => handleSelect(e)}>
          {temperament.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <button type="submit" className={style.crear}>Crear</button>
      </form>
      <Link to="/home">
        <button className={style.atras}>Atras</button>
      </Link>
    </div>
  );
}

//Formulario Controlado
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere el nombre";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(input.name)) {
    errors.name = "El nombre solo puede contener letras";
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
  } else if (!input.life_span.includes("años")) {
    errors.life_span = "La edad del perro debe incluir la palabra (años)";
  }

  if (!input.image) {
    errors.image = "La URL de la imagen es obligatoria";
  } else if (!input.image.includes("https://")) {
    errors.image = "La imagen debe tener una url válida (formato https://)";
  }

  if (!input.temperament === 0) {
    errors.temperament = "Se requieren temperamentos";
  }
  return errors;
}