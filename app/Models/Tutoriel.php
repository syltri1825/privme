<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tutoriel extends Model
{
    use HasFactory;

    protected $table = 'tutoriels';
    protected $fillable = [
        'title',
        'tutoriel',
        'category',
        'description',
        'datePublication',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
