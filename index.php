<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" type="text/css" href="main_style.css"/>
    <link rel="stylesheet" type="text/css" href="core_item_style.css"/>
    <link rel="stylesheet" type="text/css" href="main_page_style.css"/>
    <title>ИТиСС</title>
</head>
<body>
    <? 
        include "coreitems/header.php";
    ?>
    <div class="content">
        <?
            include "main_page.php";
        ?>
    </div>
    <?
        include "coreitems/footer.php"
    ?>
<script src="sandwich.js"></script>
<script src="main_page_script.js"></script>
</body>
</html>