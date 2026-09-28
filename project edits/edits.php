<?php
// edits.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>edits</title>
</head>
<body>

    <header>
        <h1>edits!!</h1>
        <nav>
            <a href="index.php">home</a>
            <a href="about.php">About</a>
            <a href="edits.php">edits</a>
            <a href="wallpaper.php">wallpapers</a>
            <a href="contact.php">Contact</a>
        </nav>
    </header>

    <main>
        <h2>search and choose your edit to download</h2>
        <p></p>
    </main>

    <div class="slideshow">
  <div class="slide fade" style="background-image: url('images/zhongli wallpaper 4k.jpg');"></div>
  <div class="slide fade" style="background-image: url('images/akaza.jpg');"></div>
  <div class="slide fade" style="background-image: url('images/akaza fireworks.jpg');"></div>
</div>

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

            /*slideshow styles*/


.slideshow {

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: fade 18s infinite; /* longer cycle */
}

.slide:nth-child(1) {
  animation-delay: 0s;
}
.slide:nth-child(2) {
  animation-delay: 6s;
}
.slide:nth-child(3) {
  animation-delay: 12s;
}

@keyframes fade {
  0% { opacity: 0; }
  10% { opacity: 1; }   /* fade in */
  40% { opacity: 1; }   /* stay visible */
  50% { opacity: 0; }   /* fade out */
  100% { opacity: 0; }
}

        

        </style>