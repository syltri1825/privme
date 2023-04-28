<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdresseEmail extends Model
{
    use HasFactory;

    protected $table = 'mail_adrs';
    protected $fillable = [
        'author',
        'email',
        'datePublication',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}