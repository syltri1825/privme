<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Tutoriel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TutorielController extends Controller
{

    protected function tutoriel($id)
    {
        $tutoriel = Tutoriel::where('id',$id)->get();

        if($tutoriel->isEmpty()){
            return response()->json([
                "product"=> null,
            ]);
        }
        else{
            return response()->json([
                "product"=> $tutoriel,
            ]);
        }
    }

    protected function tutorielNext($id)
    {
        $value = $id + 1;
        $tutoriel = Tutoriel::where('id',$value)->get();

        while ($tutoriel == null) {
            $value++;
            $tutoriel = Tutoriel::where('id',$value)->get();
        }

        if($tutoriel->isEmpty()){
            return response()->json([
                "product"=> null,
            ]);
        }
        else{
            return response()->json([
                "product"=> $tutoriel,
            ]);
        }
    }

    protected function tutorielPrev($id)
    {
        $value = $id - 1;
        $tutoriel = Tutoriel::where('id',$value)->get();

        while ($tutoriel == null) {
            $value = $value - 1;
            $tutoriel = Tutoriel::where('id',$value)->get();
        }

        if($tutoriel->isEmpty()){
            return response()->json([
                "product"=> null,
            ]);
        }
        else{
            return response()->json([
                "product"=> $tutoriel,
            ]);
        }
    }

    protected function computerList()
    {
        $tutoriel = Tutoriel::where('category','computer')
                            ->orderByDesc('created_at')
                            ->take(3)
                            ->get();

        if($tutoriel->isEmpty())
        {
            return response()->json([
                "product" => null
            ]);
        }
        return response()->json([
            "product" => $tutoriel
        ]);
    }

    // protected function smartPhone($id)
    // {
    //     $tutoriel = Tutoriel::where('id',$id)->get();

    //     if($tutoriel->isEmpty()){
    //         return response()->json([
    //             "product"=> null,
    //         ]);
    //     }
    //     else{
    //         return response()->json([
    //             "product"=> $tutoriel,
    //         ]);
    //     }
    // }

    // protected function smartPhoneList()
    // {
    //     $tutoriel = Tutoriel::where('category','smartphone')
    //                         ->orderByDesc('created_at')
    //                         ->limit(3)
    //                         ->get();

    //     if($tutoriel->isEmpty())
    //     {
    //         return response()->json([
    //             "product" => null
    //         ]);
    //     }
    //     return response()->json([
    //         "product" => $tutoriel
    //     ]);
    // }

    // protected function smartPhone($id)
    // {
    //     $tutoriel = Tutoriel::where('id',$id)->get();

    //     if($tutoriel->isEmpty()){
    //         return response()->json([
    //             "product"=> null,
    //         ]);
    //     }
    //     else{
    //         return response()->json([
    //             "product"=> $tutoriel,
    //         ]);
    //     }
    // }

    // protected function smartPhoneList()
    // {
    //     $tutoriel = Tutoriel::where('category','smartphone')
    //                         ->orderByDesc('created_at')
    //                         ->limit(3)
    //                         ->get();

    //     if($tutoriel->isEmpty())
    //     {
    //         return response()->json([
    //             "product" => null
    //         ]);
    //     }
    //     return response()->json([
    //         "product" => $tutoriel
    //     ]);
    // }

    // protected function smartPhone($id)
    // {
    //     $tutoriel = Tutoriel::where('id',$id)->get();

    //     if($tutoriel->isEmpty()){
    //         return response()->json([
    //             "product"=> null,
    //         ]);
    //     }
    //     else{
    //         return response()->json([
    //             "product"=> $tutoriel,
    //         ]);
    //     }
    // }

    // protected function smartPhoneList()
    // {
    //     $tutoriel = Tutoriel::where('category','smartphone')
    //                         ->orderByDesc('created_at')
    //                         ->limit(3)
    //                         ->get();

    //     if($tutoriel->isEmpty())
    //     {
    //         return response()->json([
    //             "product" => null
    //         ]);
    //     }
    //     return response()->json([
    //         "product" => $tutoriel
    //     ]);
    // }

    // protected function smartPhone($id)
    // {
    //     $tutoriel = Tutoriel::where('id',$id)->get();

    //     if($tutoriel->isEmpty()){
    //         return response()->json([
    //             "product"=> null,
    //         ]);
    //     }
    //     else{
    //         return response()->json([
    //             "product"=> $tutoriel,
    //         ]);
    //     }
    // }

    // protected function smartPhoneList()
    // {
    //     $tutoriel = Tutoriel::where('category','smartphone')
    //                         ->orderByDesc('created_at')
    //                         ->limit(3)
    //                         ->get();

    //     if($tutoriel->isEmpty())
    //     {
    //         return response()->json([
    //             "product" => null
    //         ]);
    //     }
    //     return response()->json([
    //         "product" => $tutoriel
    //     ]);
    // }

    protected function indexTutoriel()
    {

        
        $tutoriel = Tutoriel::all();
        
        return Inertia::render('PortAction/AdminTutoriel',[
            'tutoriel' => $tutoriel
        ]);
    }

    public function productTutoriel($id)
    {
        $tutoriel = Tutoriel::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsTutoriel',[
            'onlyTutoriel' => $tutoriel->get()
        ]);
    }
    
    public function createTutoriel(Request $request)
    {

        $this->validate($request,[
            'title' => 'required',
            'video' => 'required',
            'category' => 'required | max:50',
            'description' => 'required'
        ]);

        $user = Auth::id();

        $tit = $request->input('title');
        $cat = $request->input('category');
        $des = $request->input('description');
        $file = $request->input('video');

        $tutoriel = Tutoriel::create([
            'title' => $tit,
            'category' => $cat,
            'description' => $des,
            'datePublication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'tutoriel' => $file
        ]);
        $tutoriel->save();

        return redirect()->route('tutoriel');
    }

    protected function upMeTutoriel(Request $request,$id)
    {

        $this->validate($request,[
            'title' => 'required',
            'video' => 'required',
            'category' => 'required | max:50',
            'description' => 'required'
        ]);

        $tit = $request->input('title');
        $cat = $request->input('category');
        $des = $request->input('description');
        $file = $request->input('video');

        if($id != null)
        {
            Tutoriel::where('id',$id)->update([
                'title' => $tit,
                'category' => $cat,
                'tutoriel' => $file,
                'description' => $des,
            ]);

        }

        return redirect()->route('tutoriel');
    }

    protected function suppressionVideo($id)
    {
        $video = Video::where('id',$id)->delete();
        
        return redirect()->route('tutoriel');
    }

}




    // public function indexVideo()
    // {   
    //     $video = Video::all();
        
    //     return Inertia::render('PortAction/PortAdminVideo',[
    //         'video' => $video
    //     ]);
    // }

    // public function productVideo($id)
    // {

    //     $video = Video::where('video_id',$id);

    //     return Inertia::render('PortAction/PortDetailsMore/PortAdminDetailsVideo',[
    //         'onlyVideo' => $video->get()
    //     ]);
    // }


    
    // public function createVideo(Request $request)
    // {

    //     $this->validate($request,[
    //         'title' => 'required | max:50',
    //         'video' => 'required | mimes:mp4,x-flv,x-mpegURL,MP2T,
    //                     ,3gpp,quicktime,x-msvideo,x-ms-wmv',
    //         'category' => 'required | max:50',
    //         'description' => 'required'
    //     ]);

    //     $user = Auth::id();

    //     $tit = $request->input('title');
    //     $cat = $request->input('category');
    //     $des = $request->input('description');

    //     $file = $request->file('video');
    //     $ext = $file->getClientOriginalExtension();
    //     $fileNm = time(). '.' .$ext;
    //     $file->storeAs('Uploads/Portfolio/Publication VIDEO/',$fileNm,'public');
        
    //     $video = Video::create([
    //         'title' => $tit,
    //         'category' => $cat,
    //         'description' => $des,
    //         'date_publication' => date('d-m-Y H-i-s'),
    //         'user_id' => $user,
    //         'video' => 'storage/Uploads/Portfolio/Publication VIDEO/'.$fileNm
    //     ]);
    //     $video->save();

        
    //     return redirect()->route('video');

    // }



    // protected function upMeVideo(Request $request,$id)
    // {

    //     $this->validate($request,[
    //         'title' => 'required | max:50',
    //         'video' => 'required | mimes:mp4,x-flv,x-mpegURL,MP2T,
    //                     ,3gpp,quicktime,x-msvideo,x-ms-wmv',
    //         'category' => 'required | max:50',
    //         'description' => 'required'
    //     ]);

    //     $tit = $request->input('title');
    //     $cat = $request->input('category');
    //     $des = $request->input('description');

    //     $updvideo = Video::where('video_id',$id)->get();

    //     if($id != null)
    //     {
    //         $file = $request->file('video');
    //         $ext = $file->getClientOriginalExtension();
    //         $fileUpd = time(). '.' .$ext;
    //         $file->storeAs('Uploads/Portfolio/Publication VIDEO/',$fileUpd,'public');

    //         Video::where('video_id',$id)->update([
    //             'title' => $tit,
    //             'video' => 'storage/Uploads/Portfolio/Publication VIDEO/'.$fileUpd,
    //             'category' => $cat,
    //             'description' => $des,
    //         ]);

    //     }
    //     return redirect()->route('video');
    // }






    // protected function suppressionVideo($id)
    // {

    //     $video = Video::where('video_id',$id)->delete();
        
    //     return redirect()->route('video');
    // }





