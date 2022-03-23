import React, { useEffect } from "react";
import "./style.css";

export default function Add(props) {
    useEffect(() => {
        const form = document.getElementById("form");
        const InputUrl = document.getElementById("url");
        const InputApelido = document.getElementById("apelido");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let apelido = InputApelido.value;
            let url = InputUrl.value;

            props.SetAPIs((api) => [
                ...api,
                {
                    id: props.APIs,
                    nome: apelido,
                    url: url,
                },
            ]);

            InputApelido.value = "";
            InputUrl.value = "";
        });
    }, []);

    return (
        <section className="container-modal">
            <div className="modal">
                <div className="modal-header">
                    <span>Adicionar API</span>
                </div>
                <div className="modal-main">
                    <form id="form">
                        <label>Apelido :</label>
                        <input
                            type="text"
                            name=""
                            id="apelido"
                            placeholder="Ex: Pokeapi"
                            required
                        />

                        <br />

                        <label>Url :</label>
                        <input
                            type="text"
                            name=""
                            id="url"
                            placeholder="Ex: www.google.com"
                            required
                        />
                        <div className="buttons">
                            <button type="reset" className="btn-cancelar">
                                Cancelar
                            </button>
                            <button type="submit" className="btn-adicionar">
                                Adicionar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
