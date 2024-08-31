<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom ,
            'prenom'=> $this->prenom,
            'ville_travaile'=> $this->ville_travaile,
            'province'=> $this->province,
            'cin' => $this->cin,
            'email'=> $this->email,
            'photo' => $this->photo,
        ];
    }
}
