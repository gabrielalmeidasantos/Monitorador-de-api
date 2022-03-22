import React from "react";
import "./style.css";

export default function Add() {
    return (
        <div className="container-modal">
            <div className="modal">
                <div className="modal-header">
                    <span>Adicionar API</span>
                </div>
                <div className="modal-main">
                    <form action="">
                        <label>Nome da Api :</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Ex: Pokeapi"
                            required
                        />

                        <br />

                        <label>Url :</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Ex: www.google.com"
                            required
                        />
                        <div className="buttons">
                            <button type="reset" className="btn-cancelar">Cancelar</button>
                            <button  type="submit" className="btn-adicionar">Adicionar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
