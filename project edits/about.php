<?php
// about.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>about-page</title>
</head>
<body>

    <header>
        <h1>about me</h1>
        <nav>
            <a href="index.php">home</a>
            <a href="about.php">About</a>
            <a href="edits.php">edits</a>
            <a href="wallpaper.php">wallpapers</a>
            <a href="contact.php">Contact</a>
        </nav>
    </header>

    <main>
        <h2>about myself</h2>
        <p>i'm Ray, i am a student from the netherlands and i love making websites look good with animations and colours like here.
            <br>
            i made this website mostly for fun and to show off my skills, but also if it ends up good like it did i would like to make it public for people to use.
        </p><br><br>
        <h2>about my website</h2>
        <p>this website shows you all kind of content about edits and where to find them,
            you can also download them for free over here.
            <br>
           <p>you can use these edits as wallpapers, websites or for your own videos.</p>
            <br>
            <p>on how to put these videos and wallpapers in your websites you can find that in my tutorial tab</p>
        </p>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> My Website. All rights reserved.</p>
    </footer>

</body>
</html>

<style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
            background-image: url("images/darkdoomslayer.jpg"); 
            background-size: cover; 
            background-repeat: no-repeat; 
            background-position: center; 
            background-attachment: fixed;
        }

        header {
            background-color: #111;
            padding: 15px;
            text-align: center;
        }

        nav {
            margin: 10px 0;
        }

        nav a {
            background-color: crimson;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 5px;
            transition: 0.3s;
        }

        nav a:hover {
            background-color: darkred;
        }

        main {
            padding: 20px;
            text-align: center;
        }

        footer {
            background-color: #111;
            color: #aaa;
            text-align: center;
            padding: 15px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        </style>