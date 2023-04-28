<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artificielle IT JM</title>
</head>

<body>
    <section>
        <h1 style="color: #7852b8;"> Point Client </h1>
    </section>
    <section>
        <div>
            <h3>

                Nous avons bien reçu votre message qui est en cour de traitement.
                Notre équipe se chargera de vous contactez le plus tôt possible.
                Merci!

            </h3>
        </div>

        <strong>En reponse a votre requête çi-dessous...</strong>
        
        <div>
            <h3>Mr/Mme {{$data['name']}}</h3>
        </div>
        <div>
            <h3>{{$data['email']}}</h3>
        </div>
        <div>
            <h3>{{$data['message']}}</h3>
        </div>


        <div>
            <h4>
                Vous pouvez toujours nous contactez ici pour tout autre
                préoccupation.
                <a href="https://mailto:artjmit07@gmail.com"
                    style="color: #F9C717;"
                >ici</a>
            </h4>
        </div>

        <div>
            <h4>
                Ou via notre site web.
                <a href=""
                    style="color: #F9C717;"
                >Point Client</a>
            </h4>
        </div>
    </section>
</body>
</html>
