<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Medecin;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'guard_name'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function medecins()
    {
        return $this->belongsToMany(Medecin::class);
    }

    // public function permissions()
    // {
    //     return $this->belongsToMany(Permission::class);
    // }

    public function hasPermissionTo($permission): bool
    {
        return $this->permissions->contains('name', $permission);
    }
}
