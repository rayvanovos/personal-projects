<?php
// contact.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Homepage</title>
</head>
<body>

    <header>
        <h1>Contact</h1>
        <nav>
            <a href="index.php">home</a>
            <a href="about.php">About</a>
            <a href="edits.php">edits</a>
            <a href="wallpaper.php">wallpapers</a>
            <a href="contact.php">Contact</a>
        </nav>
    </header>

    <main>
        <h2>my contact</h2>
        <p>E-mail: rayvanovos@gmail.com</p>
        <br><br>
        <p>Phone number: 31+ 06 39 73 98 96</p>
        <br><br>
        <p>Discord: teknocolblade</p>
    </main>

        <section class="video-background">
  <video id="bg-video" autoplay muted loop>
    <source src="videos/rolling tengen.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</section>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> My Website. All rights reserved.</p>
    </footer>

</body>
</html>

<script>
  window.addEventListener('click', () => {
    const video = document.getElementById('bg-video');

    video.muted = false;      // Unmute
    video.volume = 0.2;       // Set volume to 20%
    video.play();             // Play the video

  }, { once: true }); // Only run this on the first click
</script>

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

        /* video background */
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

#bg-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.2) translateY(-50px);
  transform-origin: center;
}

        </style>