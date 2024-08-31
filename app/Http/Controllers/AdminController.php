<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Admin;
use App\models\Patient;
use App\models\Medecin;
use App\Http\Resources\AdminResource;


class AdminController extends Controller
{
    
    public function show($id)
    {
        $admin = Admin::find($id);
        $data = ['id' => $admin->id,
            'nom' => $admin->nom ,
            'prenom'=> $admin->prenom,
            'ville'=> $admin->ville_travaile,
            'province'=> $admin->province,
            'cin' => $admin->cin,
            'email'=> $admin->email,
            'photo' => $admin->photo,
        ];

        return response()->json($data);
    }


    public function ordersPerDayForLastWeek()
    {
        $today = now();
        $lastWeek = $today->subDays(7); // Get the beginning of the last week

        $dates = [];
        for ($i = 0; $i < 7; $i++) {
            $date = $lastWeek->addDays($i)->format('Y-m-d'); // Add i days to the beginning of last week
            $dates[] = $date;
        }

        return $dates;
    }
    public function insights(){
        $p = Patient::where('account_status','pending')->count();
        $m = Medecin::where('account_status','active')->count();

        
        
            $today = now();
            $lastSevenDays = [];
        
                
                $dayNumber = $today->subDays(0)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(0));
                $dayNumber = $today->subDays(1)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(1));
                $dayNumber = $today->subDays(2)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(2));
                $dayNumber = $today->subDays(3)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(3));
                $dayNumber = $today->subDays(4)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(4));
                $dayNumber = $today->subDays(5)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(5));
                $dayNumber = $today->subDays(6)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_patients_by_date($today->subDays(6));
        
            
        
        
        return response()->json(array([
            'total_demandes_patients'=> $p,
            'total_demandes_medecins'=> $m,
            'week'=>$lastSevenDays,

        ]));
    }
    public function count_patients_by_date($date){
    
        $todayCount = Patient::whereDate('created_at', $date)->count();
        return $todayCount;
    

    }
    
}
