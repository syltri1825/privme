<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class ProduitController extends Controller
{    
    public function indexProduit()
    {
        $produit = Produit::all();

        return Inertia::render('PortAction/AdminProduit',[
            'produit' => $produit
        ]);
    }

    public function productProduit($id)
    {
        
        $produit = Produit::where('id',$id);

        return Inertia::render('PortAction/DetailsMore/AdminDetailsProduit',[
            'onlyProduit' => $produit->get()
        ]);
    }

    public function createProduit(Request $request)
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
        $file->storeAs('Uploads/Point Client/Produit/',$fileNm,'public');
        
        $produit = Produit::create([
            'title' => $tit,
            'price' => $price,
            'category' => $cat,
            'description' => $des,
            'date_publication' => date('d-m-Y H-i-s'),
            'user_id' => $user,
            'produit' => 'storage/Uploads/Point Client/Produit/'.$fileNm
        ]);
        $produit->save();

        return redirect()->route('produit');
    }

    protected function upMeProduit(Request $request, $id)
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
        
        $updproduit = Produit::where('id',$id)->get();

        if($id != null)
        {
            $file = $request->file('image');
            $ext = $file->extension();
            $fileUpd = time(). '.' .$ext;
            $file->storeAs('Uploads/Point Client/Produit/',$fileUpd,'public');

            Produit::where('id',$id)->update([
                'title' => $tit,
                'price' => $price,
                'produit' => 'storage/Uploads/Point Client/Produit/'.$fileUpd,
                'category' => $cat,
                'description' => $des
            ]);

        }
        return redirect()->route('produit');
    }

    protected function suppressionProduit($id)
    {
        
        $produit = Produit::where('id',$id)->delete();
        
        return redirect()->route('produit');
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