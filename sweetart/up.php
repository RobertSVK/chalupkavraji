<?php

    header('Access-Control-Allow-Origin: *');  
    //var_dump($_POST);

    //DB details
    $dbHost = 'c248um.forpsi.com';
    $dbUsername = 'f92189';
    $dbPassword = 'uk9mf37';
    $dbName = 'f92189';

    //Create connection and select DB
    $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if($db->connect_error){
        die("Unable to connect database: " . $db->connect_error);
    }


    $photos = $_FILES["photos"]["name"];

    $title = $_POST["title"];
    $subtitle = $_POST["subtitle"];
    $date = $_POST["date"];
    $cat_id = $_POST["cat_id"];
    $color = $_POST["color"];
    $colorF = $_POST["colorF"];
    //$sql = "INSERT INTO form_data (title) VALUES ('$title')";
    $sql = "INSERT INTO topic (title, subtitle, date, color, color_f, category_id) VALUES 
                ('$title','$subtitle','$date','$color','$colorF','$cat_id')";
    $db->query($sql); 
    $topic_id = mysqli_insert_id($db);

    $i = 0;
    $ok = 0;
    foreach ($photos as $item)
    {
        //var_dump($item);
        mkdir("uploads/".$cat_id."/".$topic_id);
        
        if(move_uploaded_file($_FILES["photos"]["tmp_name"][$i], "uploads/".$cat_id."/".$topic_id."/".$_FILES['photos']['name'][$i] ))
        {
            $ok++;
            $f_name = $_FILES['photos']['name'][$i];
            $ord = ($i+1)*10;
            $sql = "INSERT INTO photo (file_name, topic_id, ord ) VALUES ('$f_name','$topic_id', $ord)";
            echo $sql;
            $db->query($sql);
            
            $fileName = "uploads/".$cat_id."/".$topic_id."/".$_FILES['photos']['name'][$i];
            $kaboom = explode(".", $fileName); // Split file name into an array using the dot
            $fileExt = end($kaboom); // Now target the last array element to get the file extension
            $target_file = $fileName;
            $resized_file = "uploads/".$cat_id."/".$topic_id."/tiny_".$_FILES['photos']['name'][$i];
            $wmax = 400;
            $hmax = 400;
            ak_img_resize($target_file, $resized_file, $wmax, $hmax, $fileExt);
        }
        $i++;
    }

    if ($i == $ok)
    {
        echo "Done";
        
        //echo $sql;


        exit;
    }
    if (move_uploaded_file($_FILES["photos"]["tmp_name"], "uploads/".$_FILES['photos']['name'])) {

        echo "done";

        exit;

    }
    echo "failed";


    // Function for resizing jpg, gif, or png image files
function ak_img_resize($target, $newcopy, $w, $h, $ext) {
    list($w_orig, $h_orig) = getimagesize($target);
    $scale_ratio = $w_orig / $h_orig;
    if (($w / $h) > $scale_ratio) {
           $w = $h * $scale_ratio;
    } else {
           $h = $w / $scale_ratio;
    }
    $img = "";
    $ext = strtolower($ext);
    if ($ext == "gif"){ 
      $img = imagecreatefromgif($target);
    } else if($ext =="png"){ 
      $img = imagecreatefrompng($target);
    } else { 
      $img = imagecreatefromjpeg($target);
    }
    $tci = imagecreatetruecolor($w, $h);
    // imagecopyresampled(dst_img, src_img, dst_x, dst_y, src_x, src_y, dst_w, dst_h, src_w, src_h)
    imagecopyresampled($tci, $img, 0, 0, 0, 0, $w, $h, $w_orig, $h_orig);
    imagejpeg($tci, $newcopy, 80);
}
?>