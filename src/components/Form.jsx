/* eslint-disable react/prop-types */
import './Form.css';

export function Form({ title, textButton }) {
    return (
        <form>
            <h2>{title}</h2>
            <div className="field">
                <input placeholder="Título" />
            </div>

            <div className="field">
                <input placeholder="Descrição" />
            </div>

            <div className="field">
                <input placeholder="Outra Informação" />
            </div>

            <button>{textButton}</button>
        </form>
    );
}
