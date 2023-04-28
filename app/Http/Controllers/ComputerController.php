<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Computer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class ComputerController extends Controller
{    
    public function indexComputer()
    {
        $computer = Computer::all();

        return Inertia::render('PortAction/AdminComputer',[
            'computer' => $computer
        ]);
    }

    public function productComputer($id)
    {
        
        $computer = Computer::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsComputer',[
            'onlyComputer' => $computer->get()
        ]);
    }

    public function createComputer(Request $request)
    {
        
        $this->validate($request,[
            'title' => 'required',
            'image' => 'required',
            'price' => 'required',
            'category' => 'required | max:50',
            'description' => 'required'
        ]);

        $user = Auth::id();

        $tit = $request->input('title');
        $price = $request->input('price');
        $cat = $request->input('category');
        $des = $request->input('description');

        $file = $request->file('image');
        $ext = $file->extension();
        $fileNm = time(). '.' .$ext;
        $file->storeAs('Uploads/Point Client/Computer/',$fileNm,'public');
        
        $computer = Computer::create([
            'title' => $tit,
            'price' => $price,
            'category' => $cat,
            'description' => $des,
            'date_publication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'computer' => 'storage/Uploads/Point Client/Computer/'.$fileNm
        ]);
        $computer->save();

        return redirect()->route('computer');
    }

    protected function upMeComputer(Request $request, $id)
    {
        
        $this->validate($request,[
            'title' => 'required',
            'image' => 'required',
            'price' => 'required',
            'category' => 'required | max:50',
            'description' => 'required'
        ]);

        $tit = $request->input('title');
        $price = $request->input('price');
        $cat = $request->input('category');
        $des = $request->input('description');

        if($id != null)
        {
            $file = $request->file('image');
            $ext = $file->extension();
            $fileUpd = time(). '.' .$ext;
            $file->storeAs('Uploads/Point Client/Computer/',$fileUpd,'public');

            Computer::where('id',$id)->update([
                'title' => $tit,
                'price' => $price,
                'computer' => 'storage/Uploads/Point Client/Computer/'.$fileUpd,
                'category' => $cat,
                'description' => $des
            ]);

        }
        return redirect()->route('computer');
    }

    protected function suppressioncomputer($id)
    {
        
        $computer = Computer::where('id',$id)->delete();
        
        return redirect()->route('computer');
    }
}






        
        // $computer = DB::table('computers')->where('user_id',Auth::id())
        //             ->leftJoin('title','title.id','=','computers.id')
        //             ->leftJoin('category','category.id','=','computers.id')
        //             ->leftJoin('description','description.id','=','computers.id')
        //             // ->select('computers.*','computers.id','=','computers.id')
        //             ->select('title.*','title.id','=','computers.id')
        //             ->select('category.*','category.id','=','computers.id')
        //             ->select('description.*','description.id','=','computers.id')
        //             ->get();


        // return Inertia::render('PortAction/PortAdmincomputer',[
        //     'computer' => $computer
        // ]);