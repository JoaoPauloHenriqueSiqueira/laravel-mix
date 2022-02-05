<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <!-- Styles -->

    <link rel="stylesheet" href="{{url(mix('/css/app.css')) }}">
</head>

<body class="antialiased">
    <div id="app">
        <example-component> </example-component>
    </div>
    <script src="{{url(mix('/js/manifest.js')) }}"></script>
    <script src="{{url(mix('/js/vendor.js')) }}"></script>
    <script src="{{url(mix('/js/admin.js')) }}"></script>

</body>

</html>