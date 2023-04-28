<?php

namespace App\Models;

use App\Models\Produit;
use App\Models\SmartTv;
use App\Models\Computer;
use App\Models\SmartPhone;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'law'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function smarttvs()
    {
        return $this->hasMany(SmartTv::class);
    }
    protected function smartphones()
    {
        return $this->hasMany(SmartPhone::class);
    }
    protected function computers()
    {
        return $this->hasMany(Computer::class);
    }
    protected function produits()
    {
        return $this->hasMany(Produit::class);
    }

    protected function tutoriel()
    {
        return $this->hasMany(Tutoriel::class);
    }
    
}
