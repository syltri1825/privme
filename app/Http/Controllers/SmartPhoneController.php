<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\SmartPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class SmartPhoneController extends Controller
{    
    public function indexSmartPhone()
    {
        $smartphone = SmartPhone::all();

        return Inertia::render('PortAction/AdminSmartPhone',[
            'smartphone' => $smartphone
        ]);
    }

    public function productSmartphone($id)
    {
        
        $smartphone = SmartPhone::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsSmartPhone',[
            'onlySmartphone' => $smartphone->get()
        ]);
    }

    public function createSmartPhone(Request $request)
    {
        
        $this->validate($request,[
            'title' => 'required',
            'price' => 'required',
            'image' => 'required',
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
        $file->storeAs('Uploads/Point Client/Smartphone/',$fileNm,'public');
        
        $smartphone = SmartPhone::create([
            'title' => $tit,
            'price' => $price,
            'category' => $cat,
            'description' => $des,
            'date_publication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'smartphone' => 'storage/Uploads/Point Client/Smartphone/'.$fileNm
        ]);
        $smartphone->save();

        return redirect()->route('smartphone');
    }

    protected function upMeSmartPhone(Request $request, $id)
    {
        
        $this->validate($request,[
            'title' => 'required',
            'price' => 'required',
            'image' => 'required',
            'category' => 'required | max:50',
            'description' => 'required'
        ]);

        $tit = $request->input('title');
        $price = $request->input('price');
        $cat = $request->input('category');
        $des = $request->input('description');
        
        $updimage = SmartPhone::where('id',$id)->get();

        if($id != null)
        {
            $file = $request->file('image');
            $ext = $file->extension();
            $fileUpd = time(). '.' .$ext;
            $file->storeAs('Uploads/Point Client/Smartphone/',$fileUpd,'public');

            SmartPhone::where('id',$id)->update([
                'title' => $tit,
                'price' => $price,
                'smartphone' => 'storage/Uploads/Point Client/Smartphone/'.$fileUpd,
                'category' => $cat,
                'description' => $des
            ]);

        }
        return redirect()->route('smartphone');
    }

    protected function suppressionSmartPhone($id)
    {
        
        $smartphone = SmartPhone::where('id',$id)->delete();
        
        return redirect()->route('smartphone');
    }
}






        
        // $image = DB::table('images')->where('user_id',Auth::id())
        //             ->leftJoin('title','title.image_id','=','images.id')
        //             ->leftJoin('category','category.image_id','=','images.id')
        //             ->leftJoin('description','description.image_id','=','images.id')
        //             // ->select('images.*','images.id','=','images.id')
        //             ->select('title.*','title.image_id','=','images.id')
        //             ->select('category.*','category.image_id','=','images.id')
        //             ->select('description.*','description.image_id','=','images.id')
        //             ->get();


        // return Inertia::render('PortAction/PortAdminImage',[
        //     'image' => $image
        // ]);