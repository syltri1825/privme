<?php

namespace App\Http\Controllers;

use App\Models\Ask;
use App\Models\MailAdr;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use App\Mail\ResponseContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function receiveUserMessage(Request $request){

        $validate = Validator::make($request->all(), [
            'name' => 'required | max:50',
            'email' => 'required',
            'content' => 'required'
        ]);
    
        if($validate->fails()){
            return response()->json(['message' => 'Operation Failled!']);
        }
    
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('content');
        $data = [
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'object' => 'Re: Demande de Service'
        ];

        // $mailSend = ['cssessinou@gmail.com','artjmit07@gmail.com'];
        // $compteur = 0;

        // while($compteur < count($mailSend)){
        //     Mail::to($mailSend[$compteur])
        //         ->send(new ContactMail($data));
        //     $compteur++; 
        // }

        $content = "<p>Demande de service de la part de $name. <br>
                    L'adresse email envoyé par $name est $email <br>
                    Message <br>
                    $message
                    </p>";
        Ask::create([
            'message' => $content,
            'datePublication' => date('d-m-Y H-i-s'),
        ]);

        $result = MailAdr::all();
        $compteur = 0;
        $length = $result->count();
    
        while($compteur < $length){
            Mail::to($result[$compteur]->email)
            ->send(new ContactMail($data));
            $compteur++; 
        }

        Mail::to($email)
            ->send(new ResponseContactMail($data));
                    
        return response()->json(['message' => 'Operation Successfull!']);
    
    }
}

