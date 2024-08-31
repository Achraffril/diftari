import React, { useRef, useState } from "react";
import axiosClient from "../../../axios-client";

function FormulaireConsultation(props) {

const [message, setMessage] = useState(null)

  const dateRef = useRef();
  const ageRef = useRef();
  const imcRef = useRef();
  const pcRef = useRef();
  const poidsRef = useRef();
  const tailleRef = useRef();
  const motifRef = useRef();

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
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    axiosClient.post(`/dossiers/${props.dossier.id}/consultations`, payload)

    .then(({data}) => {
      

    })
    .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
    })
    props.onClose(); // Close the modal after form submission
  };

  return (
    <div class="bg-white rounded-md p-6">
    <h2 class="text-lg font-semibold mb-4">Add New Consultation</h2>
    <form onSubmit={handleSubmit} class="grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
        <div class="flex flex-col mb-4 gap-2">
            <label for="age_en_mois" class="block text-sm font-medium text-gray-700">Age (months):</label>
            <input
                type="number"
                id="age_en_mois"
                name="age_en_mois"
                ref={ageRef}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4 gap-2">
            <label for="imc" class="block text-sm font-medium text-gray-700">IMC:</label>
            <input
                type="number"
                id="imc"
                name="imc"
                ref={imcRef}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4 gap-2">
            <label for="pc" class="block text-sm font-medium text-gray-700">PC:</label>
            <input
                type="number"
                id="pc"
                name="pc"
                ref={pcRef}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4 gap-2">
            <label for="poids" class="block text-sm font-medium text-gray-700">Poids:</label>
            <input
                type="number"
                id="poids"
                name="poids"
                ref={poidsRef}
                class="border border-gray-300 rounded-md p-2"
                required
            />
        </div>
        <div class="flex flex-col mb-4 gap-2">
            <label for="taille" class="block text-sm font-medium text-gray-700">Taille:</label>
            <input
                type="number"
                id="taille"
                name="taille"
                ref={tailleRef}
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

export default FormulaireConsultation;
