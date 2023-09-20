/* eslint-disable react-hooks/rules-of-hooks */
// import React from "react";
import { useSelector } from "react-redux";

export const generateInitialData = () => {

    const { selecionado: solicitud } = useSelector((state) => state.solicitud);
    const { criterios, cantC } = useSelector((state) => state.criterios);
    const id = solicitud.solicitud_id
    // console.log(id)
    if (!criterios || cantC <= 0) {
        console.error("Error: criterios is undefined or cantC is invalid");
        return [];
    }

    const initialData = [];
    for (let i = 0; i < cantC; i++) {
        if (criterios[i] && criterios[i].nombre_criterio) {
            initialData.push({
                solicitudid: id,
                id: criterios[i].id_criterio,
                criterioName: criterios[i].nombre_criterio,
                min: false,
                max: false,
                noIncluir: false,
            });
        } else {
            console.error(`Error: Invalid criterios[${i}] or missing nombre_criterio`);
        }
    }
    // console.log(initialData);
    return initialData;
};
