import React, { useEffect } from "react";
import "./style.css";
import requestApi from "../requisicao/requisicao";

export default function Add(props) {
    useEffect(() => {
        const form = document.getElementById("form");
        const InputUrl = document.getElementById("url");
        const InputApelido = document.getElementById("apelido");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let apelido = InputApelido.value;
            let url = InputUrl.value;

            requestApi(url)
                .then((response) => {
                    props.SetAPIs((api) => [
                        ...api,
                        {
                            id: api.length + 1,
                            nome: apelido,
                            status : response ? response : 'Undefined',
                            url: url,
                        },
                    ]);
                })
                .catch((err) => {
                    props.SetAPIs((api) => [
                        ...api,
                        {
                            id: api.length + 1,
                            nome: apelido,
                            status : err ? err : 'Undefined',
                            url: url,
                        },
                    ]);
                });



            alert("Api adicionada com sucesso");

            InputApelido.value = "";
            InputUrl.value = "";

            props.SetCurrentPage("dashboard")
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
