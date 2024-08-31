<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Consultation;
use App\models\Patient;
use App\models\Medecin;
use Illuminate\Support\Facades\DB;

class InsightController extends Controller
{
    public function medecin_insights(){
        $p = Patient::where('sexe','male')->count();
        $m = Patient::where('sexe','female')->count();
        $totalEnfantCount = Patient::where(DB::raw('TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())'), '<', 18)->count();


        
        
            $today = now();
            $lastSevenDays = [];
        
                
                $dayNumber = $today->subDays(0)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(0));
                $dayNumber = $today->subDays(1)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(1));
                $dayNumber = $today->subDays(2)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(2));
                $dayNumber = $today->subDays(3)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(3));
                $dayNumber = $today->subDays(4)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(4));
                $dayNumber = $today->subDays(5)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(5));
                $dayNumber = $today->subDays(6)->format('d'); 
                $lastSevenDays[$dayNumber] = $this->count_consultation_by($today->subDays(6));
        
            
        
        
        return response()->json(array([
            'total_male'=> $p,
            'total_female'=> $m,
            'total_enfant'=> $totalEnfantCount,
            'week'=>$lastSevenDays,

        ]));
    }
    public function count_consultation_by($date){
    
        $todayCount = Consultation::whereDate('created_at', $date)->count();
        return $todayCount;
    

    }
}
