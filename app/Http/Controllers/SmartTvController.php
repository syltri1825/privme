<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Image;
use App\Models\SmartTv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class SmartTvController extends Controller
{    
    public function indexSmartTv()
    {
        $smartTv = SmartTv::all();

        return Inertia::render('PortAction/AdminSmartTv',[
            'smarttv' => $smartTv
        ]);
    }

    public function productSmarttv($id)
    {
        $smartTv = SmartTv::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsSmartTv',[
            'onlySmartTv' => $smartTv->get()
        ]);
    }

    public function createSmartTv(Request $request)
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
        $file->storeAs('Uploads/Point Client/Smart Tv/',$fileNm,'public');
        
        $image = SmartTv::create([
            'title' => $tit,
            'price' => $price,
            'category' => $cat,
            'description' => $des,
            'date_publication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'smarttv' => 'storage/Uploads/Point Client/Smart Tv/'.$fileNm
        ]);
        $image->save();

        return redirect()->route('smarttv');
    }

    protected function upMeSmartTv(Request $request, $id)
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
        
        $updSmartTv = SmartTv::where('id',$id)->get();

        if($id != null)
        {
            $file = $request->file('image');
            $ext = $file->extension();
            $fileUpd = time(). '.' .$ext;
            $file->storeAs('Uploads/Point Client/Smart Tv/',$fileUpd,'public');

            SmartTv::where('id',$id)->update([
                'title' => $tit,
                'price' => $price,
                'smarttv' => 'storage/Uploads/Point Client/Smart Tv/'.$fileUpd,
                'category' => $cat,
                'description' => $des
            ]);

        }
        return redirect()->route('smarttv');
    }

    protected function suppressionSmartTv($id)
    {   
        $smartTv = SmartTv::where('id',$id)->delete();
        
        return redirect()->route('smarttv');
    }
}






        
        // $image = DB::table('images')->where('user_id',Auth::id())
        //             ->leftJoin('title','title.id','=','images.id')
        //             ->leftJoin('category','category.id','=','images.id')
        //             ->leftJoin('description','description.id','=','images.id')
        //             // ->select('images.*','images.id','=','images.id')
        //             ->select('title.*','title.id','=','images.id')
        //             ->select('category.*','category.id','=','images.id')
        //             ->select('description.*','description.id','=','images.id')
        //             ->get();


        // return Inertia::render('PortAction/PortAdminImage',[
        //     'image' => $image
        // ]);