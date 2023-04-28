<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\AdresseEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class EmailController extends Controller
{

    public function indexMail()
    {
        $mail = AdresseEmail::all();

        return Inertia::render('PortAction/AdminMail',[
            'mail' => $mail
        ]);
    }

    public function productMail($id)
    {
        
        $mail = AdresseEmail::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsMail',[
            'onlyMail' => $mail->get()
        ]);
    }

    public function createMail(Request $request)
    {
        
        $this->validate($request,[
            'author' => 'required | max:50',
            'email' => 'required'
        ]);

        $user = Auth::id();

        $tit = $request->input('author');
        $des = $request->input('email');

        $mail = AdresseEmail::create([
            'author' => $tit,
            'email' => $des,
            'date_publication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'datePublication' => date('d-m-Y H-i-s')
        ]);
        $mail->save();

        return redirect()->route('mail');
    }

    protected function upMeMail(Request $request, $id)
    {
        
        $this->validate($request,[
            'author' => 'required | max:50',
            'email' => 'required'
        ]);

        $tit = $request->input('author');
        $des = $request->input('email');
        
        $updmail = AdresseEmail::where('id',$id)->get();

        if($id != null)
        {
            AdresseEmail::where('id',$id)->update([
                'author' => $tit,
                'email' => $des,
                'datePublication' => date('d-m-Y H-i-s')
            ]);

        }
        return redirect()->route('mail');
    }

    protected function suppressionMail($id)
    {
        
        $mail = AdresseEmail::where('id',$id)->delete();
        
        return redirect()->route('mail');
    }
}






       