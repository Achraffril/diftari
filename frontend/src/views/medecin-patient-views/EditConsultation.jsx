import React, { useState, useEffect, useRef } from "react";
import axiosClient from "../../axios-client";
import { useParams } from "react-router-dom";

function EditConsultation() {
  const { id, consultationId } = useParams();
  const [consultation, setConsultation] = useState("");

  console.log(id , consultationId)
  
  const ageRef = useRef();
  const imcRef = useRef();
  const pcRef = useRef();
  const poidsRef = useRef();
  const tailleRef = useRef();
  const motifRef = useRef();

  useEffect(() => {
    axiosClient.get(`/dossiers/${id}/consultations/${consultationId}`)
      .then(response => {
        setConsultation(response.data);
      })
      .catch(error => {
        console.error('Error fetching consultation for editing:', error);
      });
  }, [id, consultationId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      age_en_mois: ageRef.current.value,
      imc: imcRef.current.value,
      medecin_id: `${props.medecin.id}`,
      dossier_id: `${props.dossier.id}`,
      pc: pcRef.current.value,
      poids: poidsRef.current.value,
      taille: tailleRef.current.value,
      motif: motifRef.current.value,
      created_at: consultation.created_at,
      updated_at: new Date().toISOString(),
    };
    axiosClient.post(`/dossiers/${id}/consultations/${consultationId}`, payload)

    .then(({data}) => {
      

    })
    .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
    })

  };

  return (
    <div class="bg-white rounded-md p-6">
    <h2 class="text-lg font-semibold mb-4">Modifier Consultation</h2>
    <form onSubmit={handleSubmit} class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
        <div class="flex flex-col mb-4">
            <label for="age_en_mois" class="block text-sm font-medium text-gray-700">Age (months):</label>
            <input
                type="number"
                id="age_en_mois"
                name="age_en_mois"
                ref={ageRef}
                value={consultation.age_en_mois}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4">
            <label for="imc" class="block text-sm font-medium text-gray-700">IMC:</label>
            <input
                type="number"
                id="imc"
                name="imc"
                ref={imcRef}
                value={consultation.imc}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4">
            <label for="pc" class="block text-sm font-medium text-gray-700">PC:</label>
            <input
                type="number"
                id="pc"
                name="pc"
                ref={pcRef}
                value={consultation.pc}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4">
            <label for="poids" class="block text-sm font-medium text-gray-700">Poids:</label>
            <input
                type="number"
                id="poids"
                name="poids"
                ref={poidsRef}
                value={consultation.poids}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4">
            <label for="taille" class="block text-sm font-medium text-gray-700">Taille:</label>
            <input
                type="number"
                id="taille"
                name="taille"
                ref={tailleRef}
                value={consultation.taille}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="col-span-3">
            <label for="motif" class="block text-sm font-medium text-gray-700">Motif:</label>
            <textarea
                id="motif"
                name="motif"
                ref={motifRef}
                value={consultation.motif}
                class="border border-gray-300 rounded-md p-2 w-full"
                required
            ></textarea>
        </div>
        <div class="col-span-3">
            <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                Submit
            </button>
        </div>
    </form>
</div>
  );
}

export default EditConsultation;
