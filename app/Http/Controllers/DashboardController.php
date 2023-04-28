<?php

namespace App\Http\Controllers;

use App\Models\Ask;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Produit;
use App\Models\SmartTv;
use App\Models\Computer;
use App\Models\Tutoriel;
use App\Models\SmartPhone;
use App\Models\AdresseEmail;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{

    protected function noticeAccount()
    {
        return Inertia::render('PortNotice', [
            'notice' => 'Recording being processed.
            We will get back to you in 24 hours!
            This Deadline passed, you can connect. Thanks!',
        ]);
    }

    protected function indexDashBoard()
    {

        $line = true;

        $authent = Auth::user();

        $smartphone = SmartPhone::all()->first();
        $smarttv = SmartTv::all()->first();
        $tutoriel = Tutoriel::all()->first();
        $computer = Computer::all()->first();
        $produit = Produit::all()->first();

        return Inertia::render('AdminDashBoard', [
            'smartphone' => $smartphone,
            'smarttv' => $smarttv,
            'tutoriel' => $tutoriel,
            'computer' => $computer,
            'produit' => $produit,
            'line' => 'true',
        ]);
    }

    protected function indexReport()
    {
        return Inertia::render('Simple/AdminReporting');
    }

    protected function indexSearch()
    {
        return Inertia::render('Simple/AdminSearch');
    }

    protected function indexSetting()
    {
        return Inertia::render('Simple/AdminSetting');
    }

    protected function indexProfile()
    {
        return Inertia::render('Simple/AdminProfile');
    }

    protected function indexNews()
    {
        $ask = Ask::all();
        // $command = Command::all();
        // $table = [$ask,$command]
        // $dataTable = [];
        // return response()->json([
        //     'message' => 'Operation Successfull',
        //     'allproduct' => $dataTable,
        // ]);
        // foreach ($table as $key => $value) {
        //     for ($i=0; $i < count($value); $i++) {
        //         array_push($dataTable,$value[$i]);
        //     }
        // }
        return Inertia::render('Simple/AdminNews',[
            'ask' => $ask,
            // 'command' => $command->get(),
        ]);
    }

    protected function suppressionAsk($id)
    {
        $ask = Ask::where('id',$id)->delete();
            
        return redirect()->route('news');
    }

    protected function indexHelp()
    {
        return Inertia::render('Simple/AdminHelp');
    }

    protected function formAddSmartphone()
    {
        return Inertia::render('PortAction/Add/AddSmartPhone');
    }

    protected function formUpdSmartphone($id)
    {
        $smartphone = SmartPhone::where('id', $id);

        return Inertia::render('PortAction/Update/UpdSmartPhone', [
            'par' => $smartphone->get(),
        ]);

    }

    protected function formAddSmartTv()
    {
        return Inertia::render('PortAction/Add/AddSmartTv');
    }

    protected function formUpdSmartTv($id)
    {
        $smarttv = SmartTv::where('id', $id);

        return Inertia::render('PortAction/Update/UpdSmartTv', [
            'par' => $smarttv->get(),
        ]);

    }

    protected function formAddMail()
    {
        return Inertia::render('PortAction/Add/AddMail');
    }

    protected function formUpdMl($id)
    {

        $mail = AdresseEmail::where('id', $id);

        return Inertia::render('PortAction/Update/UpdMail', [
            'par' => $mail->get(),
        ]);

    }

    protected function formAddTutoriel()
    {
        return Inertia::render('PortAction/Add/AddTutoriel');
    }

    protected function formUpdTutoriel($id)
    {

        $tutoriel = Tutoriel::where('id', $id);

        return Inertia::render('PortAction/Update/UpdTutoriel', [
            'par' => $tutoriel->get(),
        ]);

    }

    protected function formAddProduit()
    {
        return Inertia::render('PortAction/Add/AddProduit');
    }

    protected function formUpdProduit($id)
    {

        $produit = Produit::where('id', $id);

        return Inertia::render('PortAction/Update/UpdProduit', [
            'par' => $produit->get(),
        ]);

    }

    protected function formAddComputer()
    {
        return Inertia::render('PortAction/Add/AddComputer');
    }

    protected function formUpdComputer($id)
    {

        $computer = Computer::where('id', $id);

        return Inertia::render('PortAction/Update/UpdComputer', [
            'par' => $computer->get(),
        ]);

    }

    public function searchRac($id)
    {
        $smartphone = SmartPhone::where('category', 'like', "%{$id}%");
        $smarttv = SmartTv::where('category', 'like', "%{$id}%");
        $computer = Computer::where('category', 'like', "%{$id}%");
        $produit = Produit::where('category', 'like', "%{$id}%");
        $video = Tutoriel::where('category', 'like', "%{$id}%");

        return Inertia::render('LayoutsComponent/SearchList', [
            'smartphone' => $smartphone->get(),
            'smarttv' => $smarttv->get(),
            'tutoriel' => $tutoriel->get(),
            'produit' => $produit->get(),
            'computer' => $computer->get(),
            'linkee' => $id,
            'free' => 'no',
        ]);

    }

    public function smartPhoneOneVague()
    {
        $smartphone = SmartPhone::orderBy('title', 'desc')
            ->take(6)
            ->get();

        if ($smartphone == null) {
            return response()->json([
                'smartphone' => null,
            ]);
        }

        return response()->json([
            'smartphone' => $smartphone,
        ]);
    }

    public function smartTvOneVague()
    {
        $smarttv = SmartTv::orderBy('title', 'desc')
            ->take(6)
            ->get();

        if ($smarttv == null) {
            return response()->json([
                'smarttv' => null,
            ]);
        }

        return response()->json([
            'smarttv' => $smarttv,
        ]);
    }

    public function computerOneVague()
    {
        $computer = Computer::orderBy('title', 'desc')
            ->take(6)
            ->get();

        if ($computer == null) {
            return response()->json([
                'computer' => null,
            ]);
        }

        return response()->json([
            'computer' => $computer,
        ]);
    }

    public function produitOneVague()
    {
        $produit = Produit::orderBy('title', 'desc')
            ->take(6)
            ->get();

        if ($produit == null) {
            return response()->json([
                'produit' => null,
            ]);
        }

        return response()->json([
            'produit' => $produit,
        ]);
    }

    public function allProductOneVague()
    {
        $phone = SmartPhone::orderBy("title","desc")
                            ->take(6)                    
                            ->get();
        $computer = Computer::orderBy("title","desc")
                            ->take(6)                    
                            ->get();
        $tv = SmartTv::orderBy("title","desc")
                            ->take(6)                    
                            ->get();
        $autre = Produit::orderBy("title","desc")
                            ->take(6)                    
                            ->get();
        $table = [$phone,$tv,$computer,$autre];
        $dataTable = [];

        if ($phone->isEmpty() && $tv->isEmpty() && $computer->isEmpty()
            && $autre->isEmpty()) {
            return response()->json([
                'message' => "Operation Failled",
                'allproduct' => $null,
            ]);
        }
        else{
            foreach ($table as $key => $value) {
                for ($i=0; $i < count($value); $i++) {
                    array_push($dataTable,$value[$i]);
                }
            }
            return response()->json([
                'message' => 'Operation Successfull',
                'allproduct' => $dataTable,
            ]);
        }
    }

    public function searchAllProduct($id)
    {
        $phone = SmartPhone::where("title","like","%{$id}%")->get();
        $computer = Computer::where("title","like","%{$id}%")->get();
        $tv = SmartTv::where("title","like","%{$id}%")->get();
        $autre = Produit::where("title","like","%{$id}%")->get();
        $table = [$phone,$tv,$computer,$autre];
        $dataTable = [];

        if ($phone->isEmpty() && $tv->isEmpty() && $computer->isEmpty()
            && $autre->isEmpty()) {
            return response()->json([
                'message' => null,
            ]);
        }
        else{
            foreach ($table as $key => $value) {
                for ($i=0; $i < count($value); $i++) {
                    array_push($dataTable,$value[$i]);
                }
            }
            return response()->json([
                'message' => 'Operation Successfull',
                'phone' => $phone,
                'tv' => $tv,
                'computer' => $computer,
                'autre' => $autre,
                'product' => $dataTable,
            ]);
        }

    }

    protected function postCommand(Request $request)
    {
        $client = $request->client;
        $price = $request->price;
        $product = $request->product;
        $table = [];
        $length = count($product);

        // foreach ($product as $key => $value) {
        //     array_push($table,$value);
        // }


        $message = "<p>Nouvelle commande reçu de la part de $client->name. <br>
                    Voici les détails du commande:<br>
                    $data
                    $message
                    </p>";
    }

    protected function findProduct($cle)
    {
        $product = Product::where("name", "like", "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();

        if ($product->isEmpty()) {
            return response()->json([
                'product' => null,
            ]);
        }
        return response()->json([
            'product' => $product,
        ]);

    }

    protected function findTutoVoip($cle)
    {
        $voip = TutoVoip::where("title", "like", "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();

        if ($voip->isEmpty()) {
            return response()->json([
                "product" => null,
            ]);
        }
        return response()->json([
            "product" => $voip,
        ]);
    }

    protected function spOnly($id)
    {
        $smartphone = SmartPhone::where("id",$id)->get();

        if ($smartphone->isEmpty()) {
            return response()->json([
                "product" => null,
            ]);
        }
        return response()->json([
            "product" => $smartphone,
        ]);
    }

    protected function cpOnly($id)
    {
        $computer = Computer::where("id",$id)->get();

        if ($computer->isEmpty()) {
            return response()->json([
                "product" => null,
            ]);
        }
        return response()->json([
            "product" => $computer,
        ]);
    }

    protected function stOnly($id)
    {
        $smarttv = SmartTv::where("id",$id)->get();

        if ($smarttv->isEmpty()) {
            return response()->json([
                "product" => null,
            ]);
        }
        return response()->json([
            "product" => $smarttv,
        ]);
    }

    protected function pdOnly($id)
    {
        $produit = Produit::where("id",$id)->get();

        if ($produit->isEmpty()) {
            return response()->json([
                "product" => null,
            ]);
        }
        return response()->json([
            "product" => $produit,
        ]);
    }

    public function searchMe($cle)
    {
        $smartphone = SmartPhone::where('category', 'like', "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();
        $smarttv = SmartTv::where('category', 'like', "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();
        $tutoriel = Tutoriel::where('category', 'like', "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();
        $computer = Computer::where('category', 'like', "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();
        $produit = produit::where('category', 'like', "%{$cle}%")
            ->orderByDesc('created_at')
            ->get();

        if ($smartphone->isEmpty() && $smarttv->isEmpty() && $tutoriel->isEmpty()
            && $computer->isEmpty() && $produit->isEmpty()) {
            return Inertia::render('PortSimple/PortAdminSearch', [
                'info' => 'No results found! Please resume operation.',
                'free' => false,
            ]);
        } else {
            return Inertia::render('Simple/AdminSearch', [
                'smartphone' => $smartphone,
                'smarttv' => $smarttv,
                'tutoriel' => $tutoriel,
                'computer' => $computer,
                'produit' => $produit,
                'linkee' => $cle,
                'free' => true,
            ]);
        }

    }

}
