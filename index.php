<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<?php
function isMobileDevice()
{
    return preg_match(
        "/(android|avantgo|blackberry|bolt|boost|cricket|docomo
|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i",
        $_SERVER["HTTP_USER_AGENT"]
    );
}
?>

<!DOCTYPE html>
<html lang="ptBR">

<head>
    <title>Factor Humanus Experience</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="icon" type="image/png" href="./favicon.png" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/EasePack.min.js" integrity="sha512-Nz9JbLcdtLEsVUgGmu4depkCU2Xp+6iFNBLOa4HpM/PZtUgvLib9BdAVJX2IpH7UolpCSrvLR6dPEjSY4jDk0A==" crossorigin="anonymous"></script>
    <script src="./vendor/SplitText.min.js"></script>
    <script src="./vendor/DrawSVGPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.2.3/vivus.min.js" integrity="sha512-gnB/D2sH1xTbeOWT7tZit/RGMaRC5nmtQIsg1i8h7hUmsUw/4hrYPmAS69YNhkLYBRdLt5CQ+27e0lof28kHTQ==" crossorigin="anonymous"></script>
    <link href="https://vjs.zencdn.net/7.14.3/video-js.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link type="text/css" rel="stylesheet" href="./fonts/stylesheet.css">
    <link type="text/css" rel="stylesheet" href="./assets/styles.css">
</head>

<body>

    <div class="page-loader">
        <img src="./assets/loader.gif" alt="Loader">
    </div>

    <div class="page-device-orientation" style="display: none;">
        <img src="./assets/orientacao.jpg" alt="Aviso de orientação">
    </div>

    <div class="container-home">
        <?php require('./home.php'); ?>
    </div>

    <div id="container-menu"></div>

    <div style="display: none;" class="container-contato">

        <a style="display: block;" class="btn-close-contact" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>

        <div style="display: none;" class="modal-contact-response">
            <div class="contact-response">
                <h2 class="txt-co1">Sua mensagem foi enviada com sucesso!</h2>
                <img src="./assets/contatos/icon-check.svg" alt="">
                <button class="btn-contact-close" type="button">FECHAR</button>
            </div>
        </div>

        <div class="wrap-contact">
            <h2 class="txt-co2">CONTATO</h2>

            <div class="contact-columns">
                <div class="contact-columns-half">
                    <p class="txt-co3">Caso você queira falar com pessoas que já participaram da metodologia ID ONE HUMAN FACTOR, deixe seu contato e retornaremos em breve:</p>
                    <form method="POST" id="contato">

                        <div class="container-field">
                            <!-- <label for="nome">NOME:</label> -->
                            <input class="phname" placeholder="NOME" type="text" name="nome" id="nome" required>
                        </div>

                        <div class="two-fields">

                            <div class="container-field">
                                <!-- <label for="email">E-MAIL</label> -->
                                <input class="phemail" placeholder="E-MAIL" type="email" name="email" id="email" required email>
                            </div>
                            <div class="container-field">
                                <!-- <label for="telefone">TELEFONE</label> -->
                                <input class="phphone" placeholder="TELEFONE" type="tel" name="telefone" id="telefone" required>
                            </div>

                        </div>

                        <div class="field-end">
                            <button class="btn-contact" type="submit">ENVIAR</button>
                        </div>


                    </form>
                </div>

                <div class="contact-columns-half contact-columns-address">
                    <!-- <p>Entre em contato para mais informações:</p> -->
                    <img width="190" src="./assets/f/fhs.svg" alt="Factor Humanus Scientia">
                    <p>+55 (11) 3284-2002</p>
                    <p><a class="txt-email" href="mailto:faleconosco@factorhumanus.com">faleconosco@factorhumanus.com</a></p>
                    <p class="txt-co4">Rua Jerônimo da Veiga, 45, 1º andar</p>
                    <p class="txt-co5">Itaim - São Paulo - Brasil</p>
                    <p><small style="font-size: .6rem; margin-top: 20px; display: inline-block;">Copyright Factor Humanus Scientia © <?= Date('Y') ?></small></p>
                </div>
            </div>

        </div>

        <div class="wrap-contact-logos">
            <div class="slider-logos">
                <div class="slide"><img src="./assets/contatos/c1.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c2.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c3.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c4.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c5.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c7.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c8.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c9.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c6.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c10.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c11.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c12.jpg" alt=""></div>
                <div class="slide"><img src="./assets/contatos/c13.jpg" alt=""></div>
            </div>
        </div>

    </div>

    <div style="display: none;" class="concept-restitution">
        <a style="display: block;" class="btn-close-concept-in" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <?php require('./concept-restitution.php'); ?>
    </div>

    <div style="display: none;" class="concept-9-faculties">
        <a style="display: block;" class="btn-close-concept-in" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <?php require('./concept-9-faculties.php'); ?>
    </div>

    <div style="display: none;" class="concept-random">
        <a style="display: block;" class="btn-close-concept-in" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <div>
            <h2 class="randomTitle">
                FATOR POTENCIAL HUMANO
            </h2>
            <div class="opening-text-concept-random randomText" style="opacity: 0;">
                “Fator Potencial Humano é vida, crescimento, ampliação da consciência.”
            </div>
        </div>

    </div>

    <div style="display: none;" class="concept-potency">
        <a style="display: block;" class="btn-close-concept-in" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <div>
            <h2 class="txt-ip1" style="text-transform: uppercase;">
                QUOCIENTE DE POTÊNCIA HUMANA
            </h2>
            <div class="opening-text-concept-potency txt-ip2" style="opacity: 0;">
                Potência é a origem de uma transformação. É a capacidade do indivíduo de empreender, criar, produzir, agir e modificar algo em si ou nos outros.
                <br>
                <br>
                O Quociente de Potência Humana é o resultado da estrutura interna original do indivíduo, subtraídos os bloqueios do seu estado atual.
            </div>
        </div>

    </div>

    <div style="display: none;" class="container-concepts">
        <a style="display: block;" class="btn-close-concept" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <div class="wrap-concepts">
            <h2 class="txt-ip3" style="text-transform: uppercase;">Definições, conceitos e princípios</h2>
            <div class="slider-concepts" class="noselect">

                <div class="card" data="c5">
                    <img width="200" class="cloud9-item" src="./assets/f/egg-full.png" alt="FHS">
                    <h2 style="text-transform: uppercase;" class="randomTitleEgg">?</h2>
                </div>

                <div class="card" data="c1">
                    <img width="200" class="cloud9-item" src="./assets/f/egg-full.png" alt="FHS">
                    <h2 style="text-transform: uppercase;" class="txt-ip4">QUOCIENTE DE POTÊNCIA HUMANA</h2>
                </div>

                <div class="card" data="c2">
                    <img width="200" class="cloud9-item" src="./assets/f/egg-full.png" alt="FHS">
                    <h2 style="text-transform: uppercase;" class="txt-ip5">RESTITUIR POTÊNCIA</h2>
                </div>

                <div class="card" data="c4">
                    <img width="200" class="cloud9-item" src="./assets/f/egg-full.png" alt="FHS">
                    <h2 style="text-transform: uppercase;" class="txt-ip6">SÍNTESE</h2>
                </div>

                <div class="card" data="c3">
                    <img width="200" class="cloud9-item" src="./assets/f/egg-full.png" alt="FHS">
                    <h2 style="text-transform: uppercase;" class="txt-ip7">ESTRUTURA INTERNA E AS 9 FACULDADES DA CONSCIÊNCIA</h2>
                </div>

            </div>

            <button class="btn-slider-concepts slider-concepts-left">
                <img src="./assets/timeline/arrow-left.svg" alt="">
            </button>
            <button class="btn-slider-concepts slider-concepts-right">
                <img src="./assets/timeline/arrow-right.svg" alt="">
            </button>


        </div>
    </div>

    <div style="display: none;" class="container-estrutura">
        <?php require('./modulo-estrutura-interna.php'); ?>
    </div>

    <div style="display: none;" class="container-sintese">
        <?php require('./modulo-sintese.php'); ?>
    </div>

    <div class="video-container" style="display: none;">

        <a style="display: none;" class="btn-close-player" href="#"><img src="./assets/timeline/arrow-left.svg" alt="close"></a>
        <!-- <video id="video-manifesto" class="video-js" preload="auto" data-setup="{}">
            <source src="./assets/videos/video-manifesto.mp4" type="video/mp4" />
        </video> -->
        <div style="pointer-events: none;" id="player"></div>
        <script src="./assets/yt-player.js"></script>
    </div>

    <div style="display: none; opacity: 0;" id="potency-block">
        <div class="po-dark-bg"></div>
        <div class="egg-energy">
            <div class="egg-loader">
                <div class="egg-loader-bar"></div>
            </div>
            <img class="po-egg-outline" src="./assets/f/egg-leaked.png" alt="FHS">
            <img class="po-egg-blur" src="./assets/f/egg-blur.png" alt="FHS">
            <img class="po-egg" src="./assets/f/egg-full.png" alt="FHS">
        </div>
    </div>

    <div style="display: none;" class="container-anima-potencia">
        <?php require('./modulo-anima-potencia.php'); ?>
    </div>

    <!-- <div class="video-container-potencia" style="display: none;">
        <video id="video-potencia" class="video-js" preload="auto" data-setup="{}">
            <source src="./assets/videos/video-potencia.mp4" type="video/mp4" />
        </video>
    </div> -->

    <div class="btns-languages">
        <a href="./" class="<?= !isset($_GET['l']) && $_GET['l'] !== 'en' ? 'active' : '' ?>">PT</a>
        <a href="./?l=en" class="<?= isset($_GET['l']) && $_GET['l'] === 'en' ? 'active' : '' ?>">EN</a>
    </div>

    <div style="display: none;" id="fast-track"></div>

    <div style="display: none;" id="fast-track-menu">
        <nav>
            <ul>
                <li><a scene="potencia" class="txt-ft1" style="text-transform: uppercase;" href="#">QUOCIENTE DE POTÊNCIA HUMANA</a></li>
                <li><a scene="estrutura" class="txt-ft2" style="text-transform: uppercase;" href="#">METODOLOGIA APLICADA</a></li>
                <!-- <li><a scene="sintese" href="#">SÍNTESE</a></li> -->
                <li><a scene="restituicoes" class="txt-ft3" style="text-transform: uppercase;" href="#">RESULTADO NA PRÁTICA</a></li>
                <li><a scene="metodologia" class="txt-ft4" style="text-transform: uppercase;" href="#">MANIFESTO</a></li>
                <li><a scene="concepts" style="text-transform: uppercase;" class="txt-ft5" href="#">DEFINIÇÕES, CONCEITOS E PRINCÍPIOS</a></li>
                <li><a scene="linha-tempo" class="txt-ft6" style="text-transform: uppercase;" href="#">LINHA DO TEMPO</a></li>
                <li><a style="text-transform: uppercase;" <?= !isMobileDevice() ? 'target="_blank"' : 'target="_self"' ?> class="txt-ft7" href="./assets/folder-digital.pdf">Folder de restituições</a></li>
                <li><a <?= !isMobileDevice() ? 'target="_blank"' : 'target="_self"' ?> style="text-transform: uppercase;" class="txt-ft8" href="https://fatorpotencialhumano.org/">Ciência Fator Potencial Humano</a></li>
                <li><a <?= !isMobileDevice() ? 'target="_blank"' : 'target="_self"' ?> style="text-transform: uppercase;" class="txt-ft9" href="https://fatorpotencialhumano.org/projeto-notre-dame/">Projeto Social Notre Dame</a></li>
                <li><a <?= !isMobileDevice() ? 'target="_blank"' : 'target="_self"' ?> style="text-transform: uppercase;" class="txt-ft10" href="https://fatorpotencialhumano.org/autores/">Os Autores</a></li>
                <li><a scene="contato" style="text-transform: uppercase;" class="txt-ft11" href="#">Contato</a></li>
            </ul>
        </nav>
    </div>

    <div style="display: none; z-index: 10000;" class="container-linha-tempo">
        <?php require('./linha-tempo.php');
        ?>
    </div>

    <div style="display: none;" class="container-restituicao full-height">
        <?php require('./restituicao.php'); ?>
    </div>

    <a style="display: none;" class="btn-fast-track" href="#"><img width="60" height="78" src="./assets/btn-fast-track.png" alt="Fast Track"></a>

    <script src="https://vjs.zencdn.net/7.18.0/video.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script type="module" src="./assets/jquery.reflection.js"></script>
    <script type="module" src="./assets/jquery.carousel.js"></script>
    <script type="module" src="./node_modules/you-tube/dist/index.js"></script>
    <script type="module" src="./assets/main.js"></script>
</body>

</html>