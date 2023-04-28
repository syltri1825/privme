<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Response</title>
</head>

<body>
    <section>
        <div>
            <h1>
                Demande de service de la part de
                <strong style="color: green;">{{$data['name']}}</strong>
            </h1>
        </div>
        <div>
            <h2>
                L'adresse email envoyé par
                <strong style="color: white;">
                    {{$data['name']}}
                </strong> est 
                <strong style="color: green;">
                    {{$data['email']}}
                </strong>
            </h2>
        </div>
        <div>
            <h2>
                <strong style="color: white;">
                    Message
                </strong>
            </h2>
            <p>
                <strong style="color: white;">
                    {{$data['message']}}
                </strong>
            </p>
        </div>
    </section>
</body>
</html>

                
                

