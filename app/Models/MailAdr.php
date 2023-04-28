<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MailAdr extends Model
{
    use HasFactory;

    protected $table = 'mail_adrs';
    protected $fillable = [
        'author',
        'email',
        'date_publication',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
